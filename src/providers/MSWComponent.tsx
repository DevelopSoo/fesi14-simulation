// src/providers/MSWComponent.tsx

"use client";

import { useEffect, useState } from "react";
import { initMocks } from "@/mocks";

export const MSWComponent = ({ children }: { children: React.ReactNode }) => {
  // ✅ 현재 개발 모드가 아니면 mswReady를 true로 설정하여 초기화하지 않음
  const [mswReady, setMswReady] = useState(
    process.env.NODE_ENV !== "development",
  );
  useEffect(() => {
    const init = async () => {
      await initMocks();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  if (!mswReady) {
    return null;
  }

  // ✅ 실제 배포환경에서는 여기로 바로 오며 SSR이 잘 동작하게 됨
  return <>{children}</>;
};
