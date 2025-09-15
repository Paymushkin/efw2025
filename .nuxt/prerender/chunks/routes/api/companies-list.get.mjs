import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const companiesList_get = defineEventHandler(async (event) => {
  try {
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycby-9k6uo_l1HnNVUXBC3cmyEgtwb6EJBe7kRnbQ07QKlXLeNMk2QAQoKDUismUx1_DdlQ/exec";
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=getCompanies`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    const result = await response.json();
    console.log("Raw result from Google Sheets:", JSON.stringify(result, null, 2));
    if (result.companies && result.companies.length > 0) {
      console.log("First company:", JSON.stringify(result.companies[0], null, 2));
      console.log("Status distribution:", result.companies.reduce((acc, company) => {
        const status = company.status || "no-status";
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {}));
    }
    if (result.companies && result.companies.length > 0) {
      result.companies = result.companies.map((company, index) => ({
        ...company,
        // Временно: первые 3 компании делаем approved для тестирования
        status: company.status || (index < 3 ? "approved" : "waitlist")
      }));
    }
    return { success: true, companies: result.companies || [] };
  } catch (error) {
    console.error("Error fetching companies list:", error);
    console.log("Google Apps Script error, returning test data");
    const testCompanies = [
      {
        companyName: "Test Company 1",
        industry: "Fashion",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        status: "waitlist"
      },
      {
        companyName: "Test Company 2",
        industry: "Beauty",
        timestamp: new Date(Date.now() - 864e5).toISOString(),
        status: "waitlist"
      },
      {
        companyName: "Test Company 3",
        industry: "Wellness",
        timestamp: new Date(Date.now() - 1728e5).toISOString(),
        status: "approved"
      }
    ];
    return { success: true, companies: testCompanies };
  }
});

export { companiesList_get as default };
//# sourceMappingURL=companies-list.get.mjs.map
