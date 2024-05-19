/* eslint-disable @next/next/no-img-element */
import ProductOverlay from "./ProductOverlay";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface ProductCollectionProps extends React.HTMLAttributes<HTMLDivElement> {
  setDisplayProductOverlay: (value: boolean) => void;
  title: string;
  description: string;
  image: string;
}

function ProductCollection({
  setDisplayProductOverlay,
  description,
  image,
  title,
  className,
  ...rest
}: ProductCollectionProps) {
  return (
    <div
      className={`bg-neutral-100 hover:bg-neutral-200 transition-all p-6 rounded-lg cursor-pointer ${className}`}
      onClick={() => setDisplayProductOverlay(true)}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <img
        src={image}
        alt="Ball Image"
        className="w-full h-48 object-cover rounded-lg"
      />
    </div>
  );
}

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <ProductCollection
          setDisplayProductOverlay={setDisplayProductOverlay}
          className="md:col-span-2"
          title="Tênis"
          description="Os melhores tênis que você pode encontrar."
          image="/images/c-thumb-1.jpg"
        />
        <ProductCollection
          setDisplayProductOverlay={setDisplayProductOverlay}
          title="Basketball"
          description="The best basketball you will ever play with."
          image="/images/c-thumb-1.jpg"
        />
        <ProductCollection
          setDisplayProductOverlay={setDisplayProductOverlay}
          title="Basketball"
          description="The best basketball you will ever play with."
          image="/images/c-thumb-1.jpg"
        />
        <ProductCollection
          setDisplayProductOverlay={setDisplayProductOverlay}
          className="md:col-span-2"
          title="Basketball"
          description="The best basketball you will ever play with."
          image="/images/c-thumb-1.jpg"
        />
      </div>
    </>
  );
}
