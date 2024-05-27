import Link from "next/link";

import { Inter } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const router = useRouter();

  const isHome = router.pathname === "/";
  const isSobre = router.pathname === "/sobre";

  return (
    <header
      className={`p-4 flex justify-center items-center ${inter.className}`}
    >
      <div className="flex flex-col items-center ">
        <div className="rounded-full mt-8 w-28 h-28 bg-gradient-to-r from-amber-500 to-pink-500 flex justify-center items-center">
          <span className="text-4xl">VH</span>
        </div>
        <h1 className="text-4xl font-bold text-white mt-4">VoleiHub</h1>
        <span className="text-white my-2 text-center">
          Encontre os melhores produtos para a sua prática ✨
        </span>
        <nav className="mt-2">
          <ul
            className="flex font-bold rounded-full"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.15)",
            }}
          >
            <Link
              href="/"
              className={`px-6 py-3 rounded-full ${
                isHome ? "bg-white" : "text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/sobre"
              className={`px-6 py-3 rounded-full ${
                isSobre ? "bg-white" : "text-white"
              }`}
            >
              Sobre
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
