# Email Setup for Contact Form

The contact form is now functional and will send emails to **Richard@wishingstarrich.com**.

## Setup Instructions

### Option 1: Using Resend (Recommended - Free Tier Available)

1. Sign up for a free account at [Resend.com](https://resend.com)
2. Create an API key in your Resend dashboard
3. Add the API key to your environment variables in Coolify:
   - Variable name: `RESEND_API_KEY`
   - Variable value: Your Resend API key (starts with `re_`)

4. (Optional) Set a custom recipient email:
   - Variable name: `CONTACT_EMAIL`
   - Variable value: `Richard@wishingstarrich.com` (this is already the default)

### Option 2: Development Mode (No Email Service)

If `RESEND_API_KEY` is not set, the form will still work but emails will be logged to the console. This is useful for development and testing.

## How It Works

1. User fills out the contact form on `/contact`
2. Form data is sent to `/api/contact` API route
3. API route validates the data
4. Email is sent to Richard@wishingstarrich.com via Resend API
5. (Optional) Confirmation email is sent to the user
6. Success message is shown to the user

## Environment Variables

Add these in Coolify under your application's environment variables:

```
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=Richard@wishingstarrich.com
```

## Testing

1. Fill out the contact form
2. Submit the form
3. Check Richard's email inbox for the submission
4. The user will also receive a confirmation email (if Resend is configured)

## Troubleshooting

- If emails aren't being sent, check the Coolify logs for error messages
- Verify the `RESEND_API_KEY` is set correctly in environment variables
- Make sure the email domain is verified in Resend (for production)
- Check that `CONTACT_EMAIL` is set to the correct recipient address


