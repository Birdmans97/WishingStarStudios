import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceType, message } = body

    // Validate required fields
    if (!name || !email || !serviceType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Prepare email content
    const emailSubject = `New Contact Form Submission - ${serviceType}`
    const emailBody = `
New contact form submission from WishingStarRich website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Service Type: ${serviceType}

Message:
${message}

---
This email was sent from the contact form on wishingstarrich.com
    `.trim()

    // Try to send email using Resend API (if configured)
    const resendApiKey = process.env.RESEND_API_KEY
    const recipientEmail = process.env.CONTACT_EMAIL || 'Richard@wishingstarrich.com'

    if (resendApiKey) {
      // Use Resend API
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'WishingStarRich <noreply@wishingstarrich.com>',
          to: [recipientEmail],
          reply_to: email,
          subject: emailSubject,
          text: emailBody,
        }),
      })

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json()
        console.error('Resend API error:', errorData)
        throw new Error('Failed to send email via Resend')
      }

      const resendData = await resendResponse.json()
      console.log('Email sent successfully via Resend:', resendData.id)
    } else {
      // Fallback: Log to console (for development)
      // In production, you should configure Resend or another email service
      console.log('=== CONTACT FORM SUBMISSION ===')
      console.log('To:', recipientEmail)
      console.log('Subject:', emailSubject)
      console.log('Body:', emailBody)
      console.log('=== END SUBMISSION ===')
      
      // In development, we'll simulate success
      // In production, configure RESEND_API_KEY environment variable
    }

    // Send confirmation email to the user (optional)
    if (resendApiKey) {
      try {
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: 'WishingStarRich <noreply@wishingstarrich.com>',
            to: [email],
            subject: 'Thank you for contacting WishingStarRich',
            text: `Hi ${name},

Thank you for reaching out to WishingStarRich! I've received your inquiry about ${serviceType} and will get back to you as soon as possible.

Best regards,
Richard Hernandez
WishingStarRich`,
          }),
        })
      } catch (error) {
        // Don't fail if confirmation email fails
        console.error('Failed to send confirmation email:', error)
      }
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    )
  }
}


