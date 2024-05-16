import Image from "next/image";

export default function Collection() {
  return (
    <div className="bg-[#d2e823] px-8 py-4 sm:py-6  sm:px-24 rounded-xl mt-10">
      <div className="flex">
        <div className="w-[120px] h-[100px] relative sm:w-[250px] sm:h-[250px]">
          <Image
            src="/c-thumb-2.jpg"
            alt="Hero image"
            fill
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="w-[120px] h-[100px] relative sm:w-[250px] sm:h-[250px]">
          <Image
            src="/c-thumb-1.jpg"
            alt="Hero image"
            fill
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      </div>

      <div className="mt-4 text-center">
        <h2 className="text-xl font-medium">Tênis</h2>
        <p>26 produtos</p>
      </div>
    </div>
  );
}
