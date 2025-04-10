import logo from "../../../styles/images/logo-white.svg";
import { NavLink } from "react-router";
import { MenuItem, Navigation } from "./Navigation";
import { Space, Flex } from "antd";
import { UserButton } from "@clerk/clerk-react";
import { Layout as AntLayout } from "antd";

const { Header: AntHeader } = AntLayout;

type Props = {
  homepage?: string;
  menu?: MenuItem[];
  userPanel?: {
    showStatus?: boolean;
    showFaq?: boolean;
    menu?: MenuItem[];
  };
};

export const Header = ({ homepage = "/", menu, userPanel }: Props) => {
  return (
    <AntHeader className="h-20 bg-[#5737B9] flex flex-row justify-between items-center px-5">
      <Flex align="center" gap="2rem">
        <NavLink to={homepage}>
          <img src={logo} className="h-7 align-middle cursor-pointer" />
        </NavLink>
      </Flex>
      {!!menu && <Navigation items={menu} />}
      <Space size="large">
        {!!userPanel && (
          <Flex align="center" gap="0.5rem">
            {userPanel.menu?.length > 0 && (
              <UserButton
                showName
                appearance={{
                  elements: {
                    userButtonBox: {
                      marginRight: "1rem",
                      flexDirection: "row-reverse",
                    },
                    userButtonOuterIdentifier: {
                      color: "#fff",
                    },
                    userButtonTrigger: {
                      boxShadow: "none !important",
                    },
                  },
                }}
              >
                <UserButton.MenuItems>
                  {userPanel.menu?.map((item, i) => (
                    <UserButton.Action
                      key={i}
                      label={item.label}
                      labelIcon={item.icon}
                      onClick={item.onClick}
                    />
                  ))}
                </UserButton.MenuItems>
              </UserButton>
            )}
          </Flex>
        )}
      </Space>
    </AntHeader>
  );
};
