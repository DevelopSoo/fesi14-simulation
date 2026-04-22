// src/app/layout.tsx

import QueryProvider from "@/providers/QueryProvider";
import "./globals.css";
import { initMocks } from "@/mocks";
import { MSWProvider } from "@/providers/MSWProvider";

initMocks();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MSWProvider>
          <h1>프리렌더링 부분</h1>
          <QueryProvider>{children}</QueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
