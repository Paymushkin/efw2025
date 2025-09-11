import { defineEventHandler, readBody, createError } from 'file:///Users/paymei/Documents/Development/github/dubaifw/node_modules/h3/dist/index.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const waitlistLocal_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("Received waitlist data:", body);
    if (!body.companyName || !body.industry || !body.email || !body.agreement1 || !body.agreement2) {
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
    const data = {
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      companyName: body.companyName,
      industry: body.industry,
      name: body.name || "",
      email: body.email,
      phone: body.phone || "",
      message: body.message || "",
      agreement1: body.agreement1 ? "Yes" : "No",
      agreement2: body.agreement2 ? "Yes" : "No",
      source: "Waitlist Form"
    };
    const dataPath = join(process.cwd(), "waitlist-data.json");
    let existingData = [];
    try {
      const fileContent = await readFile(dataPath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch (error) {
      console.log("Creating new data file");
    }
    existingData.push(data);
    await writeFile(dataPath, JSON.stringify(existingData, null, 2), "utf-8");
    console.log("Data saved locally. Total entries:", existingData.length);
    return {
      success: true,
      message: "Successfully added to waitlist",
      totalEntries: existingData.length
    };
  } catch (error) {
    console.error("Waitlist submission error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: `Failed to submit waitlist application: ${error.message}`
    });
  }
});

export { waitlistLocal_post as default };
//# sourceMappingURL=waitlist-local.post.mjs.map
