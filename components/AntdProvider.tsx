"use client";

import type { ReactNode } from "react";
import { ConfigProvider, App as AntdApp, theme as antdTheme } from "antd";

interface AntdProviderProps {
  children: ReactNode;
}

export function AntdProvider({ children }: AntdProviderProps) {
  return (
    <ConfigProvider
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#0a7cff",
          fontFamily: "var(--font-inter)",
          borderRadius: 12
        }
      }}
    >
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}

