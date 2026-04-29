// src/app/page.tsx

"use client";

import { Button } from "@/stories/Button";

export default function Home() {
  return (
    <>
      <Button
        label="스토리북 버튼2"
        primary
        size="large"
        onClick={() => {
          alert("버튼 클릭");
        }}
      />
    </>
  );
}
