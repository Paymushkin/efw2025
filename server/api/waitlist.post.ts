export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log('Received waitlist data:', body);
    
    // Validate required fields
    if (!body.companyName || !body.industry || !body.email || !body.agreement1 || !body.agreement2) {
      console.log('Missing required fields:', {
        companyName: !!body.companyName,
        industry: !!body.industry,
        email: !!body.email,
        agreement1: !!body.agreement1,
        agreement2: !!body.agreement2
      });
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      });
    }

    // Google Sheets API endpoint
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz5uBhvvOPmM_8pO8zH54v6853vBSrDDPyPqWXrvYiZw1rwfGzSU_nOE2XoTms7yFLE5w/exec';
    
    const requestData = {
      companyName: body.companyName,
      industry: body.industry,
      name: body.name || '',
      email: body.email,
      phone: body.phone || '',
      message: body.message || '',
      agreement1: body.agreement1,
      agreement2: body.agreement2,
      timestamp: new Date().toISOString(),
      source: 'Waitlist Form'
    };
    
    console.log('Sending to Google Sheets:', requestData);
    
    // Отправляем данные как GET запрос с параметрами
    const urlParams = new URLSearchParams();
    urlParams.append('action', 'submit');
    urlParams.append('companyName', requestData.companyName);
    urlParams.append('industry', requestData.industry);
    urlParams.append('name', requestData.name);
    urlParams.append('email', requestData.email);
    urlParams.append('phone', requestData.phone);
    urlParams.append('message', requestData.message);
    urlParams.append('agreement1', requestData.agreement1.toString());
    urlParams.append('agreement2', requestData.agreement2.toString());
    urlParams.append('timestamp', requestData.timestamp);
    urlParams.append('source', requestData.source);
    
    console.log('Sending GET request to:', `${GOOGLE_SCRIPT_URL}?${urlParams.toString()}`);
    
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?${urlParams.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('Google Sheets response status:', response.status);
    const responseText = await response.text();
    console.log('Google Sheets response:', responseText);

    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status} - ${responseText}`);
    }

    return {
      success: true,
      message: 'Successfully added to waitlist',
      googleResponse: responseText
    };

  } catch (error) {
    console.error('Waitlist submission error:', error);
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to submit waitlist application: ${error.message}`
    });
  }
});
