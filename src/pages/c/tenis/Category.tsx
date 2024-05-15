import CategoryProductCard from "@/components/CategoryProductCard/CategoryProductCard";
import Image from "next/image";

export default function CategoryPage() {
  return (
    <main>
      <div className="relative flex">
        <div className="min-w-full min-h-full bg-transparent flex items-center justify-center">
          <h1 className="font-bold text-3xl text-yellow-600 z-50 block">
            Tênis
          </h1>
        </div>
        <div className="absolute min-w-full min-h-full bg bg-center blur-sm bg-cover py-24 bg-[url('https://imagens.ebc.com.br/LXIbw6palsc0SSYAfq-4pyiTcnE=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/brasil_ligas_da_nacoes_feminina_comemora.jpg?itok=--sSSJTq')] text-white"></div>
      </div>

      <h2 className="text-center text-yellow-400 font-bold text-4xl mt-12">
        Mais confortáveis
      </h2>

      <ul className="flex justify-center mt-8 gap-4">
        <li>
          <CategoryProductCard />
        </li>
        <li>
          <CategoryProductCard />
        </li>
        <li>
          <CategoryProductCard />
        </li>
      </ul>

      <h2 className="text-center text-yellow-400 font-bold text-4xl mt-12">
        Melhor tração
      </h2>

      <ul className="flex justify-center mt-8 gap-4">
        <li>
          <CategoryProductCard />
        </li>
        <li>
          <CategoryProductCard />
        </li>
        <li>
          <CategoryProductCard />
        </li>
      </ul>
    </main>
  );
}
