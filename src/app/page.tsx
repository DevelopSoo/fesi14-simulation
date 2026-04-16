export default function Home() {
  const userInput = '<img src="x" onerror="alert(1)" />';

  // 화면에 문자열 그대로 출력됨 (HTML로 실행되지 않음)
  return (
    <div>
      <h1>안녕</h1>
      <div>{userInput}</div>
    </div>
  );
}
