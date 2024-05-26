import { useEffect, useRef, useState } from "react";
import Filter from "./Filter";
import CollectionProduct from "./CollectionProduct";
import MobileFilterOverlay from "./MobileFilterOverlay";
import MOCK from "../HomePage/mock.json";

const { availableFilters } = MOCK;

interface Product {
  id: string;
  image: string;
  price: number;
  title: string;
  url: string;
  tracao: number;
  impulsao: number;
  conforto: number;
  amortecimento: number;
}

interface ProductOverlayProps {
  setDisplayProductOverlay: (value: boolean) => void;
  categorySlug: string;
}

async function fetchProducts({ categorySlug }: { categorySlug: string }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?populate[0]=photo&filters[category][slug][$eq]=${categorySlug}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
    }
  );

  const { data } = await response.json();

  return data;
}

export default function ProductListOverlay({
  categorySlug,
  setDisplayProductOverlay,
}: ProductOverlayProps) {
  const [filterOverlay, setFilterOverlay] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState({
    tracao: 1,
    impulsao: 1,
    conforto: 1,
    amortecimento: 1,
  });

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts({ categorySlug });

        setProducts(
          data.map((product: any) => ({
            id: product.id,
            image: product.attributes.photo.data.attributes.url,
            price: product.attributes.price,
            title: product.attributes.title,
            url: product.attributes.url,
            tracao: product.attributes.tracao,
            impulsao: product.attributes.impulsao,
            conforto: product.attributes.conforto,
            amortecimento: product.attributes.amortecimento,
          }))
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getProducts();

    console.log(selectedFilters);

    if (filterOverlay) {
      parentRef.current!.style.overflow = "hidden";
    } else {
      parentRef.current!.style.overflow = "auto";
    }
  }, [filterOverlay]);

  const filteredProducts = products.filter(
    (product) =>
      product.tracao >= selectedFilters.tracao &&
      product.impulsao >= selectedFilters.impulsao &&
      product.conforto >= selectedFilters.conforto &&
      product.amortecimento >= selectedFilters.amortecimento
  );

  return (
    <div
      className="lg:pt-0 fixed inset-0 top-0 z-[10002] flex h-full w-full backdrop-blur-2xl bg-white/70 opacity-100 item-center justify-center overflow-scroll"
      ref={parentRef}
      onClick={() => {
        if (!filterOverlay) {
          setDisplayProductOverlay(false);
          return;
        }

        setFilterOverlay(false);
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex gap-8 h-fit"
      >
        <div className="flex flex-col text-center mt-12">
          <span
            className="font-bold mb-4 text-lg text-[#fc03f0] underline"
            onClick={() => setDisplayProductOverlay(false)}
          >
            <span className="mr-1">👈</span> voltar para a home
          </span>
          <span className="text-black font-bold text-2xl">Tênis</span>
          <span className="text-lg">28 produtos</span>

          <button
            className="block xl:hidden bg-white p-2 rounded-full my-4"
            onClick={() => setFilterOverlay(true)}
          >
            Filtros
          </button>

          <div className="flex gap-8 mt-4 px-8">
            <Filter
              className="hidden xl:block"
              setFilterOverlay={setFilterOverlay}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              availableFilters={availableFilters}
            />
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <ul className="xl:grid xl:grid-cols-3 lg:flex-row gap-8">
                {filteredProducts.map((product) => (
                  <li key={product.id} className="mb-4">
                    <CollectionProduct
                      image={`${
                        process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL ?? ""
                      }${product.image}`}
                      price={product.price}
                      title={product.title}
                      url={product.url}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {filterOverlay && (
        <MobileFilterOverlay
          setFilterOverlay={setFilterOverlay}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          availableFilters={availableFilters}
        />
      )}
    </div>
  );
}
