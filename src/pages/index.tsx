import Collection from "@/components/Collection/Collection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function ProductOverlay() {
  return (
    <div className="fixed inset-0 top-0 z-[10002] flex h-full w-full backdrop-blur-2xl bg-white/70 opacity-100">
      <h3 className="text-4xl">teste</h3>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <button className="bg-white py-3 px-10 rounded-full font-bold disabled hover:bg-slate-100">
          Store
        </button>

        <ul className="flex flex-col gap-8 mt-10">
          <li>
            <Collection
              image1="/images/c-thumb-1.jpg"
              image2="/images/c-thumb-2.jpg"
              title="Coleção 1"
              length={28}
            />
          </li>
          <li>
            <Collection
              image1="/images/c-thumb-1.jpg"
              image2="/images/c-thumb-2.jpg"
              title="Coleção 2"
              length={28}
            />
          </li>
          <li>
            <Collection
              image1="/images/c-thumb-1.jpg"
              image2="/images/c-thumb-2.jpg"
              title="Coleção 3"
              length={28}
            />
          </li>
        </ul>
      </main>
    </div>
  );
}
