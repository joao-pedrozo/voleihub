import Image from "next/image";

interface CollectionProps {
  image1: string;
  image2: string;
  title: string;
  length: number;
}

export default function Collection({
  image1,
  image2,
  title,
  length,
}: CollectionProps) {
  return (
    <div className="bg-[#d2e823] px-8 py-4 sm:py-6  sm:px-24 rounded-xl cursor-pointer">
      <div className="flex">
        <div className="w-[120px] h-[100px] relative sm:w-[250px] sm:h-[250px]">
          <Image
            src={image1}
            alt="Hero image"
            fill
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="w-[120px] h-[100px] relative sm:w-[250px] sm:h-[250px]">
          <Image
            src={image2}
            alt="Hero image"
            fill
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-xl font-medium">{title}</h2>
        <p>{length} produtos</p>
      </div>
    </div>
  );
}
