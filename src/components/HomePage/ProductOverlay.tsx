import CollectionProduct from "@/components/CollectionProduct";
import MOCK from "./mock.json";
import { useEffect, useState } from "react";
import React from "react";

const { availableFilters } = MOCK;

interface ProductOverlayProps {
  setDisplayProductOverlay: (value: boolean) => void;
}

function FilterMobileOverlay({
  setFilterOverlay,
  selectedFilters,
  setSelectedFilters,
}: {
  setFilterOverlay: (value: boolean) => void;
  selectedFilters: {
    tracao: number;
    impulsao: number;
    conforto: number;
  };
  setSelectedFilters: (value: {
    tracao: number;
    impulsao: number;
    conforto: number;
  }) => void;
}) {
  return (
    <div className="absolute backdrop-blur-2xl text-center justify-center min-h-screen flex w-full mx-64">
      <Filter
        setFilterOverlay={setFilterOverlay}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
    </div>
  );
}

function Filter({
  className,
  setFilterOverlay,
  selectedFilters,
  setSelectedFilters,
}: {
  className?: string;
  setFilterOverlay: (value: boolean) => void;
  selectedFilters: {
    tracao: number;
    impulsao: number;
    conforto: number;
  };
  setSelectedFilters: (value: {
    tracao: number;
    impulsao: number;
    conforto: number;
  }) => void;
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
            // @ts-ignore
            value={selectedFilters[filter.slug]}
            onChange={(event) => {
              setSelectedFilters({
                ...selectedFilters,
                [filter.slug]: parseInt(event.target.value),
              });
            }}
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
  const [products, setProducts] = useState(MOCK.products);
  const [selectedFilters, setSelectedFilters] = useState({
    tracao: 1,
    impulsao: 1,
    conforto: 1,
  });

  useEffect(() => {
    if (filterOverlay) {
      parentRef.current!.style.overflow = "hidden";
    } else {
      parentRef.current!.style.overflow = "auto";
    }
  }, [filterOverlay]);

  const filteredProducts = products.filter((product) => {
    return (
      product.tracao >= selectedFilters.tracao &&
      product.impulsao >= selectedFilters.impulsao &&
      product.conforto >= selectedFilters.conforto
    );
  });

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
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
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
            {filteredProducts.map((product) => (
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
        <FilterMobileOverlay
          setFilterOverlay={setFilterOverlay}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
        />
      )}
    </div>
  );
}
