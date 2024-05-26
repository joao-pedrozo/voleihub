import Image from "next/image";
import Link from "next/link";

interface CollectionProductProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  price: number;
  url: string;
}

export default function CollectionProduct({
  image,
  price,
  title,
  url,
}: CollectionProductProps) {
  return (
    <Link href={url} target="_blank">
      <div className="bg-white w-[300px] lg:w-[280px] cursor-pointer rounded-lg">
        <div className="relative group bg-white !w-full !aspect-[1/1] !max-w-full rounded-lg">
          <Image className="rounded-lg" src={image} alt="Coleção 1" fill />
        </div>
        <div className="p-8">
          <span className="truncate block w-full">{title}</span>
          <span className="text-gray-500 text-md ml-2">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price)}
          </span>
        </div>
      </div>
    </Link>
  );
}