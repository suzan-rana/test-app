"use client";
import { useEffect, useState } from "react";

type TelegramUser = {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
};

export default function Home() {
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && window?.Telegram && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp;
      tg.expand(); // Expand full screen
      const initDataUnsafe = tg.initDataUnsafe;
      console.log({ initDataUnsafe });
      window.alert(JSON.stringify(initDataUnsafe))
      if (initDataUnsafe?.user) {
        setUser(initDataUnsafe.user);
        window.alert(`User: ${JSON.stringify(initDataUnsafe.user, null, 2)}`);
      }
    }
  }, []);
  

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Welcome to My Telegram Mini App</h1>
      {user ? (
        <div>
          <p>Hello, {user.first_name}!</p>
          <p>Username: @{user.username}</p>
          <p>User ID: {user.id}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
}
