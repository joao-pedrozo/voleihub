import { Inter } from "next/font/google";
import Store from "./Store";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  const [currentTab, setCurrentTab] = useState("store");

  return (
    <main
      className={`flex flex-col items-center justify-between ${inter.className} mb-10`}
    >
      <div className="flex">
        <button
          className="bg-white rounded-r-none py-3 px-10 rounded-full font-bold disabled hover:bg-slate-100"
          onClick={() => setCurrentTab("home")}
        >
          Home
        </button>
        <button
          className="opacity-90 bg-white rounded-l-none py-3 px-10 rounded-full font-bold disabled hover:bg-slate-100"
          onClick={() => setCurrentTab("store")}
        >
          Store
        </button>
      </div>
      {currentTab === "store" && <Store />}
      {currentTab === "home" && (
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-2xl text-white font-bold">Bem-vindo</h2>
        </div>
      )}
    </main>
  );
}
