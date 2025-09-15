import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const companiesList_get = defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxbWqpE_TR7HJoClggVpGBYdUGcssKxWOpbFAa7nZGQp69jrE0hUxLiiCx5nY8T_x70jg/exec";
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getCompanies`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    const result = await response.json();
    return { success: true, companies: result.companies || [] };
  } catch (error) {
    console.error("Error fetching companies list:", error);
    return { success: true, companies: [], error: error.message };
  }
});

export { companiesList_get as default };
//# sourceMappingURL=companies-list.get.mjs.map
