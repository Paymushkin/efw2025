import { d as defineEventHandler, r as readBody } from '../../nitro/nitro.mjs';
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

const sendEmail_post = defineEventHandler(async (event) => {
  event.node.res.setHeader("Access-Control-Allow-Origin", "*");
  event.node.res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  event.node.res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (event.node.req.method === "OPTIONS") {
    event.node.res.statusCode = 200;
    return;
  }
  try {
    const body = await readBody(event);
    const { name, email, message } = body;
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: "Emirates Fashion Weeks <onboarding@resend.dev>",
        to: ["paymushkinandrew@gmail.com"],
        subject: "\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 Emirates Fashion Weeks",
        text: `
          \u0418\u043C\u044F: ${name}
          Email: ${email}
          
          \u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435:
          ${message}
        `,
        html: `
          <h2>\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 Emirates Fashion Weeks</h2>
          <p><strong>\u0418\u043C\u044F:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435:</strong></p>
          <p>${message}</p>
        `
      })
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }
    return {
      success: true,
      message: "Email sent successfully"
    };
  } catch (error) {
    console.error("Error sending email:", error);
    event.node.res.statusCode = 500;
    return {
      success: false,
      message: "Failed to send email",
      error: (error == null ? void 0 : error.message) || "Unknown error"
    };
  }
});

export { sendEmail_post as default };
//# sourceMappingURL=send-email.post.mjs.map
