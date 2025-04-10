import { Spin } from "antd";
import React, { Suspense } from "react";

export const SuspenseElement = (
  Element: React.LazyExoticComponent<() => JSX.Element>
) => {
  return (
    <Suspense fallback={<SuspenseLoading />}>
      <Element />
    </Suspense>
  );
};

export const SuspenseLoading = () => {
  return (
    <div className="w-full h-full flex flex-row justify-center items-center">
      <Spin size="large" />
    </div>
  );
};
