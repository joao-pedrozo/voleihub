import ProductOverlay from "./ProductOverlay";
import Collection from "@/components/Collection/Collection";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Store() {
  const [displayProductOverlay, setDisplayProductOverlay] = useState(false);

  useEffect(() => {
    if (displayProductOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [displayProductOverlay]);

  return (
    <>
      {displayProductOverlay && (
        <ProductOverlay setDisplayProductOverlay={setDisplayProductOverlay} />
      )}

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
    </>
  );
}
