import { NextApiRequest, NextApiResponse } from 'next';
import { isValidEmail, isValidLength, sanitizeString } from '../../utils/validation';

interface NewsletterData {
  email: string;
  name?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name }: NewsletterData = req.body;

    // Validate required fields
    if (!email) {
      return res.status(400).json({ 
        error: 'We are missing your email',
        details: 'Email is required'
      });
    }

    // Sanitize inputs
    const sanitizedEmail = sanitizeString(email);
    const sanitizedName = name ? sanitizeString(name) : '';

    // Validate email format (safe from ReDoS)
    if (!isValidEmail(sanitizedEmail)) {
      return res.status(400).json({ 
        error: 'That email does not look quite right'
      });
    }

    // Validate name if provided
    if (sanitizedName && !isValidLength(sanitizedName, 1, 100)) {
      return res.status(400).json({ 
        error: 'That name is a bit too short or long',
        details: 'Name must be between 1 and 100 characters'
      });
    }

    // TODO: Implement actual newsletter subscription
    // For now, we'll log the subscription and return success
    console.log('Newsletter subscription:', {
      email: sanitizedEmail,
      name: sanitizedName,
      timestamp: new Date().toISOString()
    });

    // In production, you would:
    // 1. Add to email marketing service (Mailchimp, SendGrid, etc.)
    // 2. Store in database
    // 3. Send welcome email
    // 4. Handle unsubscribe requests

    // Return success response
    return res.status(200).json({
      success: true,
      message: 'You are on the list. Expect trailside updates soon.',
      data: {
        email: sanitizedEmail,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'We hit a snag in the woods. Please try again soon.'
    });
  }
}