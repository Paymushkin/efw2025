export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    
    // Google Apps Script URL
    const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbxX6ToFvzEnm7IGxBSA-yKQMp3UhB0OBcqaSaDqz7gq7073UESTuxzHvn43q07Kawlj0g/exec';
    
    // Prepare data for Google Sheets
    const data = {
      name: body.name,
      company: body.company || '',
      email: body.email,
      inviter: body.inviter,
      timestamp: body.timestamp,
      source: body.source
    };
    
    console.log('Sending data to Google Apps Script:', data);
    
    // Send data to Google Apps Script
    const response = await $fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Google Apps Script response:', response);
    
    if ((response as any).success) {
      return {
        success: true,
        message: 'Registration successful',
        data: response
      };
    } else {
      throw new Error((response as any).error || 'Unknown error from Google Apps Script');
    }
    
  } catch (error) {
    console.error('Registration API error:', error);
    
    // Fallback: log data locally if Google Apps Script fails
    const body = await readBody(event);
    console.log('Fallback: Logging registration data locally:', {
      name: body.name,
      company: body.company,
      email: body.email,
      inviter: body.inviter,
      timestamp: body.timestamp,
      source: body.source
    });
    
    // Still return success to user, but log the error
    return {
      success: true,
      message: 'Registration successful (logged locally)',
      warning: 'Data may not have been saved to Google Sheets'
    };
  }
});
