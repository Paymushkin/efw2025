import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const faq_get = defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbWqpE_TR7HJoClggVpGBYdUGcssKxWOpbFAa7nZGQp69jrE0hUxLiiCx5nY8T_x70jg/exec";
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getFaq`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    const result = await response.json();
    return { success: true, faq: result.faq || [] };
  } catch (error) {
    console.error("Error fetching FAQ:", error);
    return { success: true, faq: [], error: error.message };
  }
});

export { faq_get as default };
//# sourceMappingURL=faq.get.mjs.map
