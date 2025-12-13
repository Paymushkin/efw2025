import { d as defineEventHandler } from '../../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'vue';
import 'node:url';
import 'consola';

const faq_get = defineEventHandler(async (event) => {
  try {
    const SPREADSHEET_ID = "1z3JLJVzDADNCa6oSq3R701xLB8K5yyuCFlPZpSMXa1s";
    const CSV_URL = `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/export?format=csv&gid=0`;
    const response = await fetch(CSV_URL);
    if (!response.ok) {
      throw new Error(`CSV export error: ${response.statusText}`);
    }
    const csvText = await response.text();
    const lines = csvText.split("\n");
    const rows = lines.filter((line) => line.trim()).map((line) => {
      const values = [];
      let current = "";
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
          values.push(current.trim());
          current = "";
        } else {
          current += char;
        }
      }
      values.push(current.trim());
      return values;
    });
    const faqItems = rows.map((row, index) => ({
      id: `faq-${index + 1}`,
      question: row[0] || "",
      answer: row[1] || "",
      order: row[2] || index + 1
    })).filter((item) => item.question && item.answer);
    console.log("FAQ items from CSV:", faqItems.length);
    return { success: true, faq: faqItems };
  } catch (error) {
    console.error("Error fetching FAQ from CSV:", error);
    return { success: true, faq: [], error: error.message };
  }
});

export { faq_get as default };
//# sourceMappingURL=faq.get.mjs.map
