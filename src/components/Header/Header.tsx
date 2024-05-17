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
        <h1 className="text-4xl font-bold text-white mt-4">VoleiHub</h1>
        <span className="text-white font-medium mt-1 text-center mt-2">
          Encontre os melhores produtos para a sua prática ✨
        </span>
        <nav className="mt-2">
          <ul className="flex gap-2">
            <li>
              <Link className="text-stone-100 font-bold" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-stone-100 font-bold" href="/about">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="text-stone-100 font-bold" href="/contact">
                Contato
              </Link>
            </li>
            <li>
              <Link className="text-stone-100 font-bold" href="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
