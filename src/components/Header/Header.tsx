import Link from "next/link";

import { Inter } from "next/font/google";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  return (
    <header
      className={`p-4 flex justify-center items-center ${inter.className}`}
    >
      <div className="flex flex-col items-center">
        <div className="rounded-full mt-8 w-28 h-28 bg-gradient-to-r from-amber-500 to-pink-500 flex justify-center items-center">
          <span className="text-4xl">VH</span>
        </div>
        <span className="mt-4 text-xl font-bold text-white">@voleihub</span>
        <span className="text-white font-medium mt-1 text-center">
          Encontre os melhores produtos para a sua prática ✨
        </span>
      </div>
    </header>
  );
}
