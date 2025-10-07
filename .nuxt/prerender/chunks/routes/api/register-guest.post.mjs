import { defineEventHandler, readBody } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const registerGuest_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbxX6ToFvzEnm7IGxBSA-yKQMp3UhB0OBcqaSaDqz7gq7073UESTuxzHvn43q07Kawlj0g/exec";
    const data = {
      name: body.name,
      company: body.company || "",
      email: body.email,
      inviter: body.inviter,
      timestamp: body.timestamp,
      source: body.source
    };
    console.log("Sending data to Google Apps Script:", data);
    const response = await $fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("Google Apps Script response:", response);
    if (response.success) {
      return {
        success: true,
        message: "Registration successful",
        data: response
      };
    } else {
      throw new Error(response.error || "Unknown error from Google Apps Script");
    }
  } catch (error) {
    console.error("Registration API error:", error);
    const body = await readBody(event);
    console.log("Fallback: Logging registration data locally:", {
      name: body.name,
      company: body.company,
      email: body.email,
      inviter: body.inviter,
      timestamp: body.timestamp,
      source: body.source
    });
    return {
      success: true,
      message: "Registration successful (logged locally)",
      warning: "Data may not have been saved to Google Sheets"
    };
  }
});

export { registerGuest_post as default };
//# sourceMappingURL=register-guest.post.mjs.map
