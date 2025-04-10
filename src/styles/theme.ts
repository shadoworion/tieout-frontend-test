import { ClerkProviderProps } from "@clerk/clerk-react";
import { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  token: {
    colorPrimary: "#7F56D9",
    fontFamily: "Rubik, sans-serif",
    fontSize: 16,
    colorLink: "#7F56D9",
  },
  components: {
    Tag: {
      marginXS: 0,
      borderRadiusSM: 16,
      colorSuccess: "#067647",
      colorSuccessBg: "#ECFDF3",
      colorSuccessBorder: "#ABEFC6",
      colorWarning: "#B54708",
      colorWarningBg: "#FFFAEB",
      colorWarningBorder: "#FEDF89",
      colorError: "#B42318",
      colorErrorBg: "#FEF3F2",
      colorErrorBorder: "#FECDCA",
      defaultColor: "#344054",
      defaultBg: "#F9FAFB",
      colorBorder: "#EAECF0",
    },
    Notification: {
      width: 470,
    },
  },
};

export const ClerkAppearance: ClerkProviderProps["appearance"] = {
  variables: {
    colorPrimary: "#7F56D9",
    fontFamily: "Rubik, sans-serif",
    fontSize: "1rem",
  },
  userProfile: {
    elements: {
      cardBox: {
        width: "100%",
        boxShadow: "none",
        border: "1px solid #f0f0f0",
        margin: 0,
        borderRadius: "8px",
      },
      profileSection__phoneNumbers: {
        "& .cl-badge": {
          display: "none",
        },
        "& p": {
          direction: "ltr",
        },
      },
      profileSection__danger: {
        display: "none",
      },
    },
  },
};
