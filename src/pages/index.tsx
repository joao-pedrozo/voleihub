import Collection from "@/components/Collection/Collection";
import CollectionProduct from "@/components/CollectionProduct";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface ProductOverlayProps {
  setDisplayProductOverlay: (value: boolean) => void;
}

function ProductOverlay({ setDisplayProductOverlay }: ProductOverlayProps) {
  return (
    <div
      className="fixed inset-0 top-0 z-[10002] flex h-full w-full backdrop-blur-2xl bg-white/70 opacity-100 item-center justify-center"
      onClick={() => setDisplayProductOverlay(false)}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="self-center flex flex-col text-center"
      >
        <span className="text-black font-bold text-2xl">Tênis</span>
        <span className="text-lg">28 produtos</span>

        <ul className="mt-4 flex gap-6">
          <li>
            <CollectionProduct
              image="/images/p-1.webp"
              price={288.99}
              title="Asics Gel Lyte III"
              url="/"
            />
          </li>
          <li>
            <CollectionProduct
              image="/images/p-1.webp"
              price={250.99}
              title="Nike Air Max 90"
              url="/"
            />
          </li>
          <li>
            <CollectionProduct
              image="/images/p-1.webp"
              price={233.44}
              title="Adidas Superstar"
              url="/"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Home() {
  const [displayProductOverlay, setDisplayProductOverlay] = useState(false);

  useEffect(() => {
    if (displayProductOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [displayProductOverlay]);

  return (
    <div>
      {displayProductOverlay && (
        <ProductOverlay setDisplayProductOverlay={setDisplayProductOverlay} />
      )}
      <main
        className={`flex flex-col items-center justify-between ${inter.className} mb-10`}
      >
        <button className="bg-white py-3 px-10 rounded-full font-bold disabled hover:bg-slate-100">
          Store
        </button>

        <ul className="flex flex-col gap-8 mt-10">
          <li onClick={() => setDisplayProductOverlay(true)}>
            <Collection
              image1="/images/c-thumb-1.jpg"
              image2="/images/c-thumb-2.jpg"
              title="Coleção 1"
              length={28}
            />
          </li>
          <li onClick={() => setDisplayProductOverlay(true)}>
            <Collection
              image1="/images/c-thumb-1.jpg"
              image2="/images/c-thumb-2.jpg"
              title="Coleção 2"
              length={28}
            />
          </li>
          <li onClick={() => setDisplayProductOverlay(true)}>
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
