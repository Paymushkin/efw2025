import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const faqSheetsApi_get = defineEventHandler(async (event) => {
  try {
    const SPREADSHEET_ID = "1z3JLJVzDADNCa6oSq3R701xLB8K5yyuCFlPZpSMXa1s";
    const SHEET_NAME = "Sheet1";
    const API_URL = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}?key=YOUR_API_KEY`;
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`Google Sheets API error: ${response.statusText}`);
    }
    const csvText = await response.text();
    const lines = csvText.split("\n");
    const headers = lines[0].split(",").map((h) => h.replace(/"/g, "").trim());
    const rows = lines.slice(1).filter((line) => line.trim()).map((line) => {
      const values = line.split(",").map((v) => v.replace(/"/g, "").trim());
      return values;
    });
    const faqItems = rows.map((row, index) => ({
      id: `faq-${index + 1}`,
      question: row[0] || "",
      answer: row[1] || "",
      order: row[2] || index + 1
    })).filter((item) => item.question && item.answer);
    console.log("FAQ items from Google Sheets API:", faqItems.length);
    return { success: true, faq: faqItems };
  } catch (error) {
    console.error("Error fetching FAQ from Google Sheets API:", error);
    return { success: true, faq: [], error: error.message };
  }
});

export { faqSheetsApi_get as default };
//# sourceMappingURL=faq-sheets-api.get.mjs.map
