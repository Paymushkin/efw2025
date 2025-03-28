import { defineEventHandler, readBody } from 'h3';

interface EmailBody {
  name: string;
  email: string;
  message: string;
}

export default defineEventHandler(async (event) => {
  // Настройка CORS
  event.node.res.setHeader('Access-Control-Allow-Origin', '*');
  event.node.res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  event.node.res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Обработка OPTIONS запроса для CORS
  if (event.node.req.method === 'OPTIONS') {
    event.node.res.statusCode = 200;
    return;
  }

  try {
    const body = await readBody<EmailBody>(event);
    const { name, email, message } = body;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Emirates Fashion Weeks <onboarding@resend.dev>',
        to: ['paymushkinandrew@gmail.com'],
        subject: 'Новая заявка с сайта Emirates Fashion Weeks',
        text: `
          Имя: ${name}
          Email: ${email}
          
          Сообщение:
          ${message}
        `,
        html: `
          <h2>Новая заявка с сайта Emirates Fashion Weeks</h2>
          <p><strong>Имя:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Сообщение:</strong></p>
          <p>${message}</p>
        `
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send email');
    }

    return {
      success: true,
      message: 'Email sent successfully'
    };
  } catch (error: any) {
    console.error('Error sending email:', error);
    event.node.res.statusCode = 500;
    return {
      success: false,
      message: 'Failed to send email',
      error: error?.message || 'Unknown error'
    };
  }
}); 