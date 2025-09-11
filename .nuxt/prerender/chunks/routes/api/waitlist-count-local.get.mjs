import { defineEventHandler } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

const waitlistCountLocal_get = defineEventHandler(async (event) => {
  try {
    const dataPath = join(process.cwd(), "waitlist-data.json");
    let count = 0;
    try {
      const fileContent = await readFile(dataPath, "utf-8");
      const data = JSON.parse(fileContent);
      count = data.length;
    } catch (error) {
      console.log("Data file does not exist, returning 0");
    }
    return {
      success: true,
      count
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

export { waitlistCountLocal_get as default };
//# sourceMappingURL=waitlist-count-local.get.mjs.map
