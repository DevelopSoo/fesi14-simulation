// src/app/page.tsx

export default function Home() {
  return <h1>환경: {process.env.NEXT_PUBLIC_MY_ENVIRONMENT} vercel 배포</h1>;
}
