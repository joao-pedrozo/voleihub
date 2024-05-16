import Collection from "@/components/Collection/Collection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <button className="bg-white py-3 px-10 rounded-full font-bold disabled hover:bg-slate-100">
          Store
        </button>

        <ul>
          <li>
            <Collection />
          </li>
        </ul>
      </main>
    </div>
  );
}
