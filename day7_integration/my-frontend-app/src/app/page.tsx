"use client";

import { useState, useEffect, useCallback } from "react";

// Day 5 Spring Boot: UserController is @RequestMapping("/api/users")
const API_BASE = "http://localhost:8080/api/users";

type User = {
  id: number;
  username: string;
  email: string;
};

type ErrorBody = {
  code?: number;
  message?: string;
  data?: unknown;
};

export default function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async () => {
    try {
      setError(null);
      const res = await fetch(API_BASE);
      if (!res.ok) {
        const errBody: ErrorBody = await res.json().catch(() => ({}));
        throw new Error(errBody.message || `HTTP ${res.status}`);
      }
      const data: User[] = await res.json();
      setUsers(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "無法載入使用者列表");
      setUsers([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch(API_BASE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const errBody = data as ErrorBody;
        const message = errBody.message || `請求失敗 (${res.status})`;
        setError(message);
        return;
      }

      setUsername("");
      setEmail("");
      await fetchUsers();
    } catch (e) {
      setError(e instanceof Error ? e.message : "送出失敗");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 p-8 font-sans">
      <main className="mx-auto max-w-2xl space-y-10">
        <h1 className="text-2xl font-semibold text-zinc-900">
          User Management (Day 7)
        </h1>

        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-red-800"
          >
            {error}
          </div>
        )}

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

        <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-medium text-zinc-800">
            使用者列表
          </h2>
          {isLoading ? (
            <p className="py-4 text-zinc-500">載入中...</p>
          ) : (
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
          )}
        </section>
      </main>
    </div>
  );
}
