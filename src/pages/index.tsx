import Image from "next/image";
import { Inter } from "next/font/google";
import ProductCard from "@/components/ProductCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
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
