import { Flex } from "antd";
import { Navigate, Outlet, useLocation } from "react-router";
import { GoogleOneTap, SignedIn, SignedOut } from "@clerk/clerk-react";

export const Auth = () => {
  const location = useLocation();
  return (
    <div className="w-full my-0 mx-auto">
      <SignedOut>
        <GoogleOneTap />
        <Flex className="w-full min-h-screen" justify="center" align="center">
          <Outlet />
        </Flex>
      </SignedOut>
      <SignedIn>
        <Navigate to="/" state={{ from: location }} replace />
      </SignedIn>
    </div>
  );
};
