import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';

const reels_get = defineEventHandler(async (event) => {
  try {
    const SPREADSHEET_ID = "12hBjIa1dMRgX7nVGBMvoAK_1d3Nxl4K-Gi0z9TIB4dQ";
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
    const videoUrls = rows.map((row) => {
      var _a;
      return (_a = row[0]) == null ? void 0 : _a.trim();
    }).filter((url) => url && url.startsWith("http")).map((url) => url.replace(/^"(.*)"$/, "$1")).filter((url, index, array) => array.indexOf(url) === index);
    console.log("Video URLs from CSV:", videoUrls.length);
    console.log("First video URL:", videoUrls[0]);
    return { success: true, videos: videoUrls };
  } catch (error) {
    console.error("Error fetching reels from CSV:", error);
    return { success: true, videos: [], error: error.message };
  }
});

export { reels_get as default };
//# sourceMappingURL=reels.get.mjs.map
