import { Outlet } from "react-router";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

export const SignedInRoute = () => {
  return (
    <>
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};
