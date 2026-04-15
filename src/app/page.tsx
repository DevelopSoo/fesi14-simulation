"use client";

import { useState, useEffect } from "react";

type FriendType = {
  name: string;
  age: string;
  gender: string;
};
export default function Home() {
  // 친구 목록과 새 친구 정보를 저장할 변수
  const [friends, setFriends] = useState<FriendType[]>(() => {
    if (typeof window === "undefined") return [];
    const saved = localStorage.getItem("friend-list");
    return saved ? JSON.parse(saved) : [];
  });
  const [newFriend, setNewFriend] = useState<FriendType>({
    name: "",
    age: "",
    gender: "남자",
  });

  // 페이지가 처음 열릴 때 저장된 친구 목록 불러오기
  // useEffect(() => {
  //   const initFriends = () => {
  //     const savedFriends = localStorage.getItem("friend-list");
  //     if (savedFriends) {
  //       setFriends(JSON.parse(savedFriends));
  //     }
  //   };
  //   initFriends();
  // }, []);

  // 친구를 추가하는 함수
  function addFriend() {
    if (newFriend.name === "" || newFriend.age === "") {
      return alert("이름과 나이를 입력해주세요.");
    }

    const newFriendList = [...friends, newFriend];
    setFriends(newFriendList);
    localStorage.setItem("friend-list", JSON.stringify(newFriendList));

    // 입력창 초기화
    setNewFriend({
      name: "",
      age: "",
      gender: "남자",
    });
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-blue-100 p-8">
      <h1 className="mb-6 text-3xl font-bold text-blue-800">내 친구 목록</h1>

      {/* 친구 추가 폼 */}
      <div className="mb-8 flex w-full max-w-md flex-col gap-4">
        <input
          type="text"
          value={newFriend.name}
          onChange={(e) => setNewFriend({ ...newFriend, name: e.target.value })}
          placeholder="친구 이름 입력"
          className="rounded border border-blue-300 px-4 py-2"
        />
        <input
          type="number"
          value={newFriend.age}
          onChange={(e) => setNewFriend({ ...newFriend, age: e.target.value })}
          placeholder="나이 입력"
          className="rounded border border-blue-300 px-4 py-2"
        />
        <select
          value={newFriend.gender}
          onChange={(e) =>
            setNewFriend({ ...newFriend, gender: e.target.value })
          }
          className="rounded border border-blue-300 px-4 py-2"
        >
          <option value="남자">남자</option>
          <option value="여자">여자</option>
        </select>
        <button
          onClick={addFriend}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          친구 추가
        </button>
      </div>

      {/* 친구 목록 */}
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-xl text-blue-600">
          친구들 ({friends.length}명)
        </h2>

        {friends.length === 0 ? (
          <p className="text-gray-500">
            아직 친구가 없어요. 친구를 추가해보세요!
          </p>
        ) : (
          <ul className="space-y-2">
            {friends.map((friend, index) => (
              <li
                key={index}
                className="flex items-center justify-between rounded bg-blue-50 p-3"
              >
                <span className="font-medium text-blue-700">
                  👫 {friend.name} ({friend.age}세, {friend.gender})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
