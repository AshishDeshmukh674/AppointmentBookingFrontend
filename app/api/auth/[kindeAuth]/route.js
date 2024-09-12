import { handleAuth, handleCallback } from '@kinde-oss/kinde-auth-nextjs/server';

// Define the GET method to handle authentication
export const GET = async (req, res) => {
  try {
    // Handle the authentication callback
    await handleAuth(req, res, {
      afterCallback: (req, res, session) => {
        // Here you can redirect the user to the correct route after successful login
        res.redirect('/');  // Change this to any page you want
      },
    });
  } catch (error) {
    console.error('Authentication error:', error);
    // Handle the error, for example by redirecting to an error page
    res.redirect('/error');
  }
};
