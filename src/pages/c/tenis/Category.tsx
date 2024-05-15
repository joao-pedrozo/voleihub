import CategoryProductCard from "@/components/CategoryProductCard/CategoryProductCard";
import Image from "next/image";

export default function CategoryPage() {
  return (
    <main>
      <div className="relative bg bg-center blur-sm bg-cover py-24 bg-[url('https://imagens.ebc.com.br/LXIbw6palsc0SSYAfq-4pyiTcnE=/1600x800/https://agenciabrasil.ebc.com.br/sites/default/files/thumbnails/image/brasil_ligas_da_nacoes_feminina_comemora.jpg?itok=--sSSJTq')] text-white">
        <h1 className="text-center font-bold text-3xl">Tênis</h1>
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
