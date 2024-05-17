import Image from "next/image";
import { Inter } from "next/font/google";
import TeamMember from "@/components/TeamMember";

const inter = Inter({ subsets: ["latin"] });

// TODO: Componentizar

export default function About() {
  return (
    <main
      className={`text-white flex flex-col items-center ${inter.className}`}
    >
      <div className="grid grid-cols-2 justify-center max-w-[900px] mt-8 gap-8">
        <div className="w-full bg-[url('/images/volei-1.png')] bg-no-repeat bg-center min-h-full h-full"></div>
        <div className="w-full">
          <h2 className="text-4xl font-bold mb-4">Bem-vindo</h2>

          <p className="font-medium text-zinc-300">
            Somos apaixonados por voleibol e dedicados a fornecer as melhores
            recomendações de produtos para você. Desde bolas de alto desempenho
            até redes de qualidade superior, temos tudo o que você precisa para
            jogar com estilo e excelência. Nosso objetivo é ajudar você a
            alcançar seu melhor desempenho na quadra. Junte-se a nós e descubra
            o mundo do voleibol com VoleiHub!
          </p>
        </div>
      </div>
      <div className="max-w-[900px] mt-16 text-center">
        <h2 className="font-bold text-4xl mb-4">Nosso time</h2>
        <p>
          Conheça nosso fabuloso painel de especialistas em voleibol. São
          jogadores e treinadores experientes que vivem, amam e respiram o
          esporte. Eles estão totalmente obcecados em trazer a você os melhores
          produtos do mercado.
        </p>
        <ul className="grid grid-cols-2 gap-4 mt-8">
          <TeamMember
            name="Mateus"
            role="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="/images/avatar-2.jpg"
          />
          <TeamMember
            name="João Pedro"
            role="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="/images/avatar-2.jpg"
          />
          <TeamMember
            name="Marcelo"
            role="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="/images/avatar-2.jpg"
          />
          <TeamMember
            name="Joabe"
            role="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            image="/images/avatar-2.jpg"
          />
        </ul>
      </div>

      <section className="max-w-[900px] mt-16 text-center text-black">
        <h2 className="font-bold text-4xl mb-8 text-white">Depoimentos</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg font-medium">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, nunc in ultrices aliquam, nisl nunc lacinia arcu, id
              ullamcorper justo nisl id nunc."
            </p>
            <p className="mt-4 font-semibold">- John Doe</p>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <p className="text-lg font-medium">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vestibulum, nunc in ultrices aliquam, nisl nunc lacinia arcu, id
              ullamcorper justo nisl id nunc."
            </p>
            <p className="mt-4 font-semibold">- Jane Smith</p>
          </div>
        </div>
      </section>

      {/* <div className="max-w-[900px] mt-16 text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex p-12 rounded-lg items-center text-black justify-center bg-white">
            <span className="text-8xl font-black">100+</span>
          </div>
          <div className="bg-white text-black p-12 rounded-lg">
            <span className="text-xl font-medium">
              Com mais de 100 avaliações de produtos no nosso currículo, temos
              certeza de que testamos praticamente tudo o que você precisa para
              arrasar no seu jogo. Não estamos aqui apenas pela vitória, mas por
              todas as jogadas espetaculares também!
            </span>
          </div>
        </div>
      </div> */}
    </main>
  );
}
