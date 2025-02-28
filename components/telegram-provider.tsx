"use client";
import { useEffect } from "react";
// @ts-ignore
import { init, expand } from "@twa-dev/sdk";

export default function TelegramProvider({ children }: { children: React.ReactNode}) {
  useEffect(() => {
    init(); // Initialize Telegram SDK
    expand(); // Expand Web App to full screen
  }, []);

  return <>{children}</>;
}
