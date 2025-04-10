import React, { LegacyRef, ReactElement, ReactNode, forwardRef } from "react";
import { Button as AntdButton, ButtonProps, Tooltip } from "antd";
import { useNavigate } from "react-router";
import cx from "classnames";

type Props = ButtonProps & {
  label?: ReactNode;
  icon?: ReactElement;
  link?: string;
  tooltip?: string;
};

export const Button = forwardRef((props: Props, ref: LegacyRef<any>) => {
  const navigate = props.link ? useNavigate() : undefined;

  const Component = (
    <AntdButton
      ref={ref}
      {...props}
      type={props.type || "primary"}
      iconPosition={props.iconPosition || "start"}
      icon={
        props.icon &&
        React.cloneElement(props.icon, {
          className: cx(props.icon.props?.className || "", "anticon"),
        })
      }
      size={props.size || "large"}
      onClick={(e) =>
        !!props.link
          ? navigate(props.link)
          : !!props.onClick && props.onClick(e)
      }
    >
      {props.label || props.children}
    </AntdButton>
  );

  return !!props.tooltip ? (
    <Tooltip placement="top" title={props.tooltip} children={Component} />
  ) : (
    Component
  );
});
