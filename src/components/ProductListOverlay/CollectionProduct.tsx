import Image from "next/image";
import { Product } from "./ProductListOverlay";

interface CollectionProductProps extends React.HTMLAttributes<HTMLDivElement> {
  produtId: number;
  image: string;
  title: string;
  price: number;
  url: string;
  setSelectedProductId: (id: number) => void;
}

export default function CollectionProduct({
  image,
  price,
  title,
  setSelectedProductId,
  produtId,
}: CollectionProductProps) {
  return (
    <div
      className="bg-white w-[180px] lg:w-[280px] cursor-pointer rounded-lg"
      onClick={() => setSelectedProductId(produtId)}
    >
      <div className="relative group bg-white !w-full !aspect-[1/1] !max-w-full rounded-lg">
        <Image className="rounded-lg" src={image} alt="Coleção 1" fill />
      </div>
      <div className="p-4 lg:p-8">
        <span className="truncate block w-full">{title}</span>
        <span className="text-gray-500 text-md ml-2">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
      </div>
    </div>
  );
}
