import Image from "next/image";

export default function CategoryProductCard() {
  return (
    <div className="p-2 bg-zinc-100 rounded-lg cursor-pointer hover:bg-zinc-200 transition-all">
      <Image
        src="https://adaptive-images.uooucdn.com.br/tr:w-1100,h-1594,c-at_max,pr-true,q-90/a152-ofyzta/pv/17/a5/ff/17a96b512c2209eafd2c74e724.png"
        alt=""
        width={300}
        height={300}
      />
      <div className="flex flex-col items-start">
        <h3 className="text-center text-yellow-400 text-2xl font-bold">
          Tênis Nike Air Max 90 Essential
        </h3>
        <p className="text-center text-gray-400">
          Ideal para conforto, durabilidade e estilo.
        </p>
        <span className="font-semibold">R$ 799,90</span>
      </div>
    </div>
  );
}
