import { CSSProperties, ReactNode } from "react";
import cx from "classnames";

type Props = {
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export const AgCustomCell = ({ className, style, children }: Props) => {
  return (
    <div
      className={cx(
        "w-full h-[42px] flex flex-row justify-center items-center",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
