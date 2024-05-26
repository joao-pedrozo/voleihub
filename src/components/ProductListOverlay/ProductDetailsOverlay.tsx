import Image from "next/image";
import Link from "next/link";

export default function ProductDetailsOverlay() {
  return (
    <div className="absolute backdrop-blur-3xl justify-center min-h-screen flex w-full mx-64">
      <div className="bg-white h-fit p-9 mx-8 rounded-xl self-center w-[420px]">
        <div className="w-full relative h-fit">
          <div className="relative group h-fit !w-full !aspect-[1/0.8] !max-w-full rounded-lg">
            <Image
              className="rounded-md"
              src="/images/c-thumb-2.jpg"
              alt="Coleção 1"
              fill
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1 text-center">
          <span className="block font-bold text-2xl">Adidas NX 0</span>

          <span className="line-clamp-2 text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            facilisi. Nullam nec eros nec libero. Donec nec odio. Donec nec
            odio.
          </span>
          <span className="text-lg font-bold">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(199.99)}
          </span>
          <Link
            href="https://google.com"
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
