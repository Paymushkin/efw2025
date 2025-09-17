import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const faqJson_get = defineEventHandler(async (event) => {
  try {
    const SPREADSHEET_ID = "1z3JLJVzDADNCa6oSq3R701xLB8K5yyuCFlPZpSMXa1s";
    const JSON_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=0`;
    const response = await fetch(JSON_URL);
    if (!response.ok) {
      throw new Error(`JSON export error: ${response.statusText}`);
    }
    const jsonText = await response.text();
    const cleanJson = jsonText.replace(/^google\.visualization\.Query\.setResponse\(/, "").replace(/\);$/, "");
    const data = JSON.parse(cleanJson);
    const rows = data.table.rows || [];
    const faqItems = rows.map((row, index) => {
      var _a, _b, _c;
      const cells = row.c || [];
      return {
        id: `faq-${index + 1}`,
        question: ((_a = cells[0]) == null ? void 0 : _a.v) || "",
        answer: ((_b = cells[1]) == null ? void 0 : _b.v) || "",
        order: ((_c = cells[2]) == null ? void 0 : _c.v) || index + 1
      };
    }).filter((item) => item.question && item.answer);
    console.log("FAQ items from JSON:", faqItems.length);
    return { success: true, faq: faqItems };
  } catch (error) {
    console.error("Error fetching FAQ from JSON:", error);
    return { success: true, faq: [], error: error.message };
  }
});

export { faqJson_get as default };
//# sourceMappingURL=faq-json.get.mjs.map
