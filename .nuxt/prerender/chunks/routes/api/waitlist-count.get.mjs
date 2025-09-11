import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const waitlistCount_get = defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz5uBhvvOPmM_8pO8zH54v6853vBSrDDPyPqWXrvYiZw1rwfGzSU_nOE2XoTms7yFLE5w/exec";
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getCount`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.status}`);
    }
    const result = await response.json();
    return {
      success: true,
      count: result.count || 0
    };
  } catch (error) {
    console.error("Error getting waitlist count:", error);
    return {
      success: false,
      count: 0,
      error: error.message
    };
  }
});

export { waitlistCount_get as default };
//# sourceMappingURL=waitlist-count.get.mjs.map
