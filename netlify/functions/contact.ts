export const handler = async (event: any, context: any) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    if (!process.env.RESEND_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Netlify 환경 변수에 RESEND_API_KEY가 설정되지 않았습니다.' })
      };
    }
    
    if (!process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Netlify 환경 변수에 이메일 설정(CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL)이 누락되었습니다.' })
      };
    }

    const data = JSON.parse(event.body || '{}');
    const { name, phone, email, message, honeypot } = data;

    // Honeypot spam protection
    if (honeypot) {
      // Act like it succeeded to fool bots
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Message sent successfully' })
      };
    }

    // Required field validation
    if (!name || !phone || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'All fields are required' })
      };
    }

    // Prepare email HTML
    const htmlOutput = `
      <h2>New Contact Inquiry from laicaicompany.com</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <br />
      <p><strong>Message:</strong></p>
      <pre style="white-space: pre-wrap; font-family: sans-serif;">${message}</pre>
    `;

    // Send email via Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev',
        to: process.env.CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `[Web Inquiry] New message from ${name}`,
        html: htmlOutput
      })
    });

    if (!res.ok) {
      const errorData = await res.json();
      console.error('Resend Error:', errorData);
      const resendErrorMsg = errorData?.message || JSON.stringify(errorData);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: `Resend 발송 실패: ${resendErrorMsg}` })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Message sent successfully' })
    };
  } catch (error) {
    console.error('Function execution error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' })
    };
  }
};
