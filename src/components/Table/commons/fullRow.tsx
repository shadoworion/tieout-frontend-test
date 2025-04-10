import React, { CSSProperties, ReactNode } from "react";
import cx from "classnames";

type Props = {
  className?: string;
  style?: CSSProperties;
  height?: number;
  children: ReactNode;
};

export const AgFullRow = ({
  className,
  style,
  height = 45,
  children,
}: Props) => {
  return (
    <div
      className={cx(
        "w-full flex flex-row justify-between items-center px-4 rtl:pr-20 ltr:pl-20",
        className
      )}
      style={{ ...style, height: height - 5 }}
    >
      {children}
    </div>
  );
};
