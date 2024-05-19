import CollectionProduct from "@/components/CollectionProduct";
import MOCK from "./mock.json";
import { useEffect, useState } from "react";
import React from "react";

const { availableFilters, products } = MOCK;

interface ProductOverlayProps {
  setDisplayProductOverlay: (value: boolean) => void;
}

function FilterMobileOverlay({
  setFilterOverlay,
}: {
  setFilterOverlay: (value: boolean) => void;
}) {
  return (
    <div className="absolute backdrop-blur-2xl text-center justify-center min-h-screen flex w-full mx-64">
      <Filter setFilterOverlay={setFilterOverlay} />
    </div>
  );
}

function Filter({
  className,
  setFilterOverlay,
}: {
  className?: string;
  setFilterOverlay: (value: boolean) => void;
}) {
  return (
    <div
      className={`bg-white p-8 rounded-lg h-full self-center max-w-80 ${className}`}
      onClick={(event) => event.stopPropagation()}
    >
      <h2 className="text-2xl font-bold">Filtros</h2>
      <span className="mt-2 mb-4 block">
        Selecione aqui os filtros que deseja aplicar em sua busca.
      </span>

      {availableFilters.map((filter) => (
        <div key={filter.id} className="flex flex-col gap-2">
          <span className="text-lg font-bold">{filter.name}</span>

          <input
            type="range"
            id={filter.name}
            name={filter.name}
            min="1"
            max="5"
          />
        </div>
      ))}
      <button
        className="mt-8 bg-purple-700 px-8 py-2 rounded-md w-full text-white font-bold"
        onClick={() => setFilterOverlay(false)}
      >
        Aplicar
      </button>
    </div>
  );
}

export default function ProductOverlay({
  setDisplayProductOverlay,
}: ProductOverlayProps) {
  const [filterOverlay, setFilterOverlay] = useState(false);
  const parentRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (filterOverlay) {
      parentRef.current!.style.overflow = "hidden";
    } else {
      parentRef.current!.style.overflow = "auto";
    }
  }, [filterOverlay]);

  return (
    <div
      className="lg:pt-0 fixed inset-0 top-0 z-[10002] flex h-full w-full backdrop-blur-2xl bg-white/70 opacity-100 item-center justify-center overflow-scroll"
      ref={parentRef}
      onClick={() => setDisplayProductOverlay(false)}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex gap-8 h-fit"
      >
        <Filter
          className="hidden xl:block"
          setFilterOverlay={setFilterOverlay}
        />
        <div className="flex flex-col text-center mt-12">
          <span className="text-black font-bold text-2xl">Tênis</span>
          <span className="text-lg">28 produtos</span>

          <button
            className="block xl:hidden bg-white p-2 rounded-full my-4"
            onClick={() => setFilterOverlay(true)}
          >
            Filtros
          </button>

          <ul className="mt-4 xl:grid xl:grid-cols-3 lg:flex-row gap-6">
            {products.map((product) => (
              <li key={product.id} className="my-4">
                <CollectionProduct
                  image={product.image}
                  price={product.price}
                  title={product.title}
                  url="https://google.com"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {filterOverlay && (
        <FilterMobileOverlay setFilterOverlay={setFilterOverlay} />
      )}
    </div>
  );
}
