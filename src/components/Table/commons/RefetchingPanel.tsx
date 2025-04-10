import React from "react";
import { IStatusPanelParams } from "ag-grid-community";
import { Space, Spin, Typography } from "antd";

const { Text } = Typography;

export const RefetchingPanel = (props: IStatusPanelParams) => {
  return (
    <Space className="h-10">
      <Spin size="small" />
      <Text>טעינה</Text>
    </Space>
  );
};
