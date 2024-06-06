/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import CategoriesList from "./CategoriesList";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState("home");

  return (
    <main
      className={`flex px-4 flex-col mb-28 items-center justify-between ${inter.className}`}
    >
      <CategoriesList />
    </main>
  );
}
