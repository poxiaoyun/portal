"use client";

import { useEffect, useRef, useState } from "react";
import { Spin, Typography } from "antd";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

/**
 * 联系页 office 地图（腾讯地图 GL JS，纯前端，适配静态导出）。
 * key 通过构建环境变量 NEXT_PUBLIC_TENCENT_MAP_KEY 注入（免费申请：https://lbs.qq.com/），
 * 未配置时降级为地址卡片 + 外链，不影响页面渲染。
 */

// 成都银泰城悦坊（益州大道中段1999号），GCJ-02 坐标（腾讯地图坐标系）
const OFFICE_COORD = { lat: 30.540905, lng: 104.05972 };
const TMAP_SDK_URL = "https://map.qq.com/api/gljs?v=1.exp";
const TMAP_KEY = process.env.NEXT_PUBLIC_TENCENT_MAP_KEY?.trim() ?? "";

// 腾讯地图 GL JS 无官方 TypeScript 类型，按官方文档 API 使用
type TMapNamespace = any;

declare global {
  interface Window {
    TMap?: TMapNamespace;
    __officeMapSdkPromise?: Promise<void>;
  }
}

function loadTMapSdk(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("SSR"));
  if (window.TMap) return Promise.resolve();
  if (window.__officeMapSdkPromise) return window.__officeMapSdkPromise;
  window.__officeMapSdkPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `${TMAP_SDK_URL}&key=${encodeURIComponent(TMAP_KEY)}`;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("腾讯地图 SDK 加载失败"));
    document.head.appendChild(script);
  });
  return window.__officeMapSdkPromise;
}

type MapStatus = "loading" | "ready" | "fallback";

export function OfficeMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<MapStatus>(() => (TMAP_KEY ? "loading" : "fallback"));

  useEffect(() => {
    if (!TMAP_KEY) return;
    let cancelled = false;
    let map: TMapNamespace | null = null;

    loadTMapSdk()
      .then(() => {
        if (cancelled || !containerRef.current || !window.TMap) return;
        const TMap = window.TMap;
        const center = new TMap.LatLng(OFFICE_COORD.lat, OFFICE_COORD.lng);
        map = new TMap.Map(containerRef.current, {
          center,
          zoom: 16,
        });
        new TMap.MultiMarker({
          map,
          styles: {
            default: new TMap.MarkerStyle({
              width: 24,
              height: 32,
              anchor: { x: 12, y: 32 },
            }),
          },
          geometries: [
            {
              id: "office",
              styleId: "default",
              position: center,
              properties: { title: siteConfig.name },
            },
          ],
        });
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("fallback");
      });

    return () => {
      cancelled = true;
      if (map) map.destroy();
    };
  }, []);

  const searchUrl = `https://map.qq.com/search/${encodeURIComponent("成都银泰城悦坊")}`;

  if (status === "fallback") {
    return (
      <div
        style={{
          height: 320,
          borderRadius: 12,
          background: "var(--bg-secondary, rgba(15,23,42,0.03))",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 12,
          padding: 24,
          textAlign: "center",
        }}
      >
        <MapPin size={32} color="#0a7cff" />
        <Typography.Paragraph style={{ margin: 0, maxWidth: 320 }}>
          {siteConfig.address.streetAddress}
        </Typography.Paragraph>
        <Typography.Link href={searchUrl} target="_blank" rel="noopener noreferrer">
          在腾讯地图中查看导航
        </Typography.Link>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", height: 320, borderRadius: 12, overflow: "hidden" }}>
      <div ref={containerRef} style={{ width: "100%", height: "100%" }} />
      {status === "loading" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-secondary, rgba(15,23,42,0.03))",
          }}
        >
          <Spin tip="地图加载中…" />
        </div>
      )}
    </div>
  );
}
