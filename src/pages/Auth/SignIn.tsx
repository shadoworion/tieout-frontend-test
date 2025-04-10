import { SignIn as ClerkSignIn } from "@clerk/clerk-react";

export const SignIn = () => {
  return (
    <ClerkSignIn
      appearance={{
        elements: {
          headerSubtitle: {
            display: "none",
          },
          footerAction: {
            display: "none",
          },
        },
      }}
    />
  );
};
