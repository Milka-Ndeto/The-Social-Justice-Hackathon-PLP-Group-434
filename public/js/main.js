import { Clerk } from '@clerk/clerk-js';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
const clerk = new Clerk(clerkPubKey);

clerk.load().then(() => {
  if (clerk.user) {
    const userButtonDiv = document.getElementById('user-button');
    if (userButtonDiv) {
      clerk.mountUserButton(userButtonDiv);
    }
  } else {
    const signInDiv = document.getElementById('sign-in');
    if (signInDiv) {
      clerk.mountSignIn(signInDiv);
    }
  }
});