import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface ProductDetailsOverlayProps {
  image: string;
  title: string;
  description: string;
  price: number;
  url: string;
  setSelectedProductId: (id: number | null) => void;
}

export default function ProductDetailsOverlay({
  image,
  title,
  description,
  price,
  url,
  setSelectedProductId,
}: ProductDetailsOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="absolute backdrop-blur-3xl justify-center min-h-screen flex w-full mx-64"
      ref={overlayRef}
      onClick={(event) => {
        if (event.target === overlayRef.current) {
          setSelectedProductId(null);
        }
      }}
    >
      <div className="bg-white h-fit p-9 mx-8 rounded-xl self-center w-[420px]">
        <div className="w-full relative h-fit">
          <div className="relative group h-fit !w-full !aspect-[1/0.8] !max-w-full rounded-lg">
            <Image
              className="rounded-md"
              src={`${process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL}${image}`}
              alt="Padrão"
              fill
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1 text-center">
          <span className="block font-bold text-2xl">{title}</span>

          <span className="line-clamp-2 text-md">{description}</span>
          <span className="text-lg font-bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>
          <Link
            href={url}
            target="_blank"
            className="bg-purple-700 py-2 px-4 rounded-md mt-1 text-white font-semibold"
          >
            <span>Ir para o site</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
