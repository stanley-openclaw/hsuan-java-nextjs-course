"use client";

import { useState, useEffect } from "react";

type User = {
  id: number;
  username: string;
  email: string;
};

// Mock data for Day 6 - will be replaced by API call later
const MOCK_USERS: User[] = [
  { id: 1, username: "Alice", email: "alice@example.com" },
  { id: 2, username: "Bob", email: "bob@example.com" },
  { id: 3, username: "Carol", email: "carol@example.com" },
];

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<User[]>(MOCK_USERS);

  // On mount: placeholder for future API fetch (e.g. GET /api/users)
  useEffect(() => {
    setUsers(MOCK_USERS);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO Day 7: call POST /api/users with { username, email }
    const newUser: User = {
      id: users.length + 1,
      username,
      email,
    };
    setUsers((prev) => [...prev, newUser]);
    setUsername("");
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8 font-sans">
      <main className="mx-auto max-w-2xl space-y-10">
        <h1 className="text-2xl font-semibold text-zinc-900">
          User Management (Day 6)
        </h1>

        {/* 1. Add User Form */}
        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-zinc-800">
            新增使用者
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="username"
                className="mb-1 block text-sm font-medium text-zinc-600"
              >
                名稱
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="請輸入名稱"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-zinc-600"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded border border-zinc-300 px-3 py-2 text-zinc-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                placeholder="example@mail.com"
              />
            </div>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              送出
            </button>
          </form>
        </section>

        {/* 2. User List */}
        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-zinc-800">
            使用者列表
          </h2>
          <ul className="divide-y divide-zinc-200">
            {users.length === 0 ? (
              <li className="py-4 text-zinc-500">尚無使用者</li>
            ) : (
              users.map((user) => (
                <li
                  key={user.id}
                  className="flex justify-between py-3 text-zinc-700"
                >
                  <span className="font-medium">{user.username}</span>
                  <span className="text-zinc-500">{user.email}</span>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}
