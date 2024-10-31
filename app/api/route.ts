import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { userMail, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: 'kai.0121.pika@gmail.com', pass: 'hsjx fflg cjgw sjyo' }
    });

    const mailOptions = {
      from: 'kai.0121.pika@gmail.com',
      to: 'kai.0121.pika@gmail.com',
      subject: 'Contact Form Message',
      text: message,
      replyTo: userMail
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
