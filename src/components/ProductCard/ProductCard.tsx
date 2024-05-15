import Image from "next/image";
import Link from "next/link";

export default function ProductCard() {
  return (
    <div className="bg-zinc-700 rounded-lg shadow-md flex">
      <Image
        src="https://static.wixstatic.com/media/e19d1f_8bc55498575f4634ad3e1a06dc2d4319~mv2.png/v1/fill/w_310,h_282,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/02708884A6_edited_edited.png"
        alt=""
        width={155}
        height={250}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">Tênis</h3>
        <p className="text-gray-400">
          Busque os melhores tênis dentro do seu orçamento!
        </p>
        <button className="mt-4 bg-yellow-400 py-2 px-6 rounded-md font-medium">
          <Link href="/products">Ver produtos</Link>
        </button>
      </div>
    </div>
  );
}
