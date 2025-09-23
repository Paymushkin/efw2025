import { defineEventHandler, readBody, createError } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const waitlist_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("Received waitlist data:", body);
    if (!body.companyName || !body.industry || !body.agreement1 || !body.agreement2) {
      console.log("Missing required fields:", {
        companyName: !!body.companyName,
        industry: !!body.industry,
        email: !!body.email,
        agreement1: !!body.agreement1,
        agreement2: !!body.agreement2
      });
      throw createError({
        statusCode: 400,
        statusMessage: "Missing required fields"
      });
    }
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxUuh8iEc5YE8k2q5e36DE66OpYPetpEOA0YdpQm0QwRXqqEcBDPcU5xP0RZI71R-bsbA/exec";
    const requestData = {
      companyName: body.companyName,
      industry: body.industry,
      name: body.name || "",
      email: body.email,
      phone: body.phone || "",
      message: body.message || "",
      agreement1: body.agreement1,
      agreement2: body.agreement2,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      source: "Waitlist Form"
    };
    console.log("Sending to Google Sheets:", requestData);
    const urlParams = new URLSearchParams();
    urlParams.append("action", "submit");
    urlParams.append("companyName", requestData.companyName);
    urlParams.append("industry", requestData.industry);
    urlParams.append("name", requestData.name);
    urlParams.append("email", requestData.email);
    urlParams.append("phone", requestData.phone);
    urlParams.append("message", requestData.message);
    urlParams.append("agreement1", requestData.agreement1.toString());
    urlParams.append("agreement2", requestData.agreement2.toString());
    urlParams.append("timestamp", requestData.timestamp);
    urlParams.append("source", requestData.source);
    urlParams.append("status", "WAITLIST");
    console.log("Sending GET request to:", `${GOOGLE_SCRIPT_URL}?${urlParams.toString()}`);
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?${urlParams.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log("Google Sheets response status:", response.status);
    const responseText = await response.text();
    console.log("Google Sheets response:", responseText);
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status} - ${responseText}`);
    }
    return {
      success: true,
      message: "Successfully added to waitlist",
      googleResponse: responseText
    };
  } catch (error) {
    console.error("Waitlist submission error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to submit waitlist application: ${error.message}`
    });
  }
});

export { waitlist_post as default };
//# sourceMappingURL=waitlist.post.mjs.map
