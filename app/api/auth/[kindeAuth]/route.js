import { handleAuth } from '@kinde-oss/kinde-auth-nextjs/server';

export const GET = async (req, res) => {
  try {
    // Handle authentication and redirect after login
    await handleAuth(req, res, {
      afterCallback: (req, res, session) => {
        console.log("User successfully authenticated:", session);
        // Redirect to a specific route after successful login
        res.redirect('/appointments');  // Redirect to your desired page
      },
    });
  } catch (error) {
    console.error('Error during authentication:', error);

    // Return a proper error response to help with debugging
    res.status(500).json({ error: 'Authentication failed. Please try again.' });
  }
};
