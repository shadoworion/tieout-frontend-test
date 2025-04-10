import background from "../../styles/images/default-bg.png";
import logo from "../../styles/images/logo-white.svg";
import { ConfigProvider, Flex } from "antd";
import { Spin } from "antd";

export const Loading = () => {
  return (
    <div
      className="relative h-full flex flex-col justify-center items-center landscape:(min-h-screen overflow-y-auto)"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Flex vertical justify="center" align="center" gap="2rem">
        <img src={logo} className="w-[200px]" />
        <ConfigProvider theme={{ token: { colorPrimary: "#fff" } }}>
          <Spin size="large" />
        </ConfigProvider>
      </Flex>
      <div className="absolute bottom-5 text-white">
        אם נדרשת עזרה של תמיכה אפשר לשלוח לנו מייל ל:{" "}
        <a
          className="text-white! underline!"
          href="mailto:support@bloxtax.co.il"
          target="_blank"
        >
          support@bloxtax.co.il
        </a>
      </div>
    </div>
  );
};
