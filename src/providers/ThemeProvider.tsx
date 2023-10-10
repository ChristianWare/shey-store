import { ConfigProvider } from "antd";

export default function ThemProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#000",
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
}
