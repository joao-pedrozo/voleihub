import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[#21124a] min-h-screen">
      <Header />
      <main
        className={`flex flex-col items-center justify-between mt-12 ${inter.className}`}
      >
        <h2 className="text-3xl text-yellow-400 font-bold">
          Qual produto você busca?
        </h2>

        <nav className="mt-12">
          <ul className="flex gap-6">
            <li>
              <ProductCard />
            </li>
            <li>
              <ProductCard />
            </li>
          </ul>
        </nav>
      </main>
    </div>
  );
}
