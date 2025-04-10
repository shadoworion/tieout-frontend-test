import { usePermissions } from "../../globals";
import { Outlet } from "react-router";
import { RedirectToSignIn } from "@clerk/clerk-react";

type Props = {
  permission: string;
};

export const WithPermission = ({ permission }: Props) => {
  const { hasPermissions } = usePermissions();
  return hasPermissions(permission) ? <Outlet /> : <RedirectToSignIn />;
};
