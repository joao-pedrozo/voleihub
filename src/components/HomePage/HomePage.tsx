/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import Store from "./Store";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <main
      className={`flex flex-col items-center justify-between ${inter.className}`}
    >
      <Store />
    </main>
  );
}
