import { ReactElement, ReactNode } from "react";
import { NavLink } from "react-router";
import { Dropdown, Flex, Space, Typography, theme } from "antd";
import { Button } from "../../Base/Button";
import cx from "classnames";
import { ItemType } from "antd/lib/menu/interface";

const { useToken } = theme;
const { Text } = Typography;

export type MenuItem = {
  key: string;
  type?: string;
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
  children?: MenuItem[];
};

type Props = {
  items: MenuItem[];
};

export const Navigation = ({ items }: Props) => {
  const { token } = useToken();

  const contentStyle = {
    backgroundColor: token.colorBgElevated,
    borderRadius: token.borderRadiusLG,
    boxShadow: token.boxShadowSecondary,
  };

  const menuStyle = {
    boxShadow: "none",
  };

  return (
    <Space size="large">
      {items.filter(Boolean).map((item) =>
        item.children && item.children.length > 0 ? (
          <Dropdown
            key={item.key}
            menu={{ items: item.children as ItemType[] }}
            dropdownRender={({ props }: ReactElement) => (
              <div className="min-w-50 mt-2" style={contentStyle}>
                <Flex className="p-1" vertical gap="0.5rem" style={menuStyle}>
                  {props.items.map((ditem) => (
                    <NavLink key={ditem.key} to={ditem.key}>
                      <Button
                        className="w-full"
                        type={ditem.type || "text"}
                        icon={ditem.icon}
                        label={
                          <Text className="w-full text-right!">
                            {ditem.label}
                          </Text>
                        }
                      />
                    </NavLink>
                  ))}
                </Flex>
              </div>
            )}
          >
            <NavLink to={item.key}>
              {({ isActive }) => (
                <Button
                  className={cx({
                    "text-white!": !isActive,
                  })}
                  type={item.type || isActive ? "primary" : "text"}
                  label={item.label}
                  icon={item.icon as ReactElement}
                />
              )}
            </NavLink>
          </Dropdown>
        ) : (
          <NavLink key={item.key} to={item.key} end>
            {({ isActive }) => (
              <Button
                className={cx({
                  "text-white!": !isActive,
                })}
                type={item.type || isActive ? "primary" : "text"}
                label={item.label}
                icon={item.icon as ReactElement}
              />
            )}
          </NavLink>
        )
      )}
    </Space>
  );
};
