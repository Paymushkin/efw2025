import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Установка CORS заголовков
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Обработка OPTIONS запроса
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
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
    });

    res.status(200).json({
      success: true,
      message: 'Email sent successfully'
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
      error: error?.message || 'Unknown error'
    });
  }
} 