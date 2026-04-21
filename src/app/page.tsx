// app/page.tsx

import { Input } from "@/components/Input";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-96">
        <Input type="text" placeholder="입력하기" />
      </div>
    </div>
  );
}
