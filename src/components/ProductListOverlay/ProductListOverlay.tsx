/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Filter from "./Filter";
import CollectionProduct from "./CollectionProduct";
import MobileFilterOverlay from "./MobileFilterOverlay";
import MOCK from "../HomePage/mock.json";
import ProductDetailsOverlay from "./ProductDetailsOverlay";

const { availableFilters } = MOCK;

export interface Product {
  id: number;
  image: string;
  price: number;
  title: string;
  url: string;
  tracao: number;
  description: string;
  impulsao: number;
  conforto: number;
  amortecimento: number;
}

interface ProductOverlayProps {
  setDisplayProductOverlay: (value: boolean) => void;
  categorySlug: string | null;
  title: string | null;
  description: string | null;
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
  title,
  description,
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
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef.current) {
        console.log(parentRef.current.scrollTop);

        setScrollPosition(parentRef.current.scrollTop);
      }
    };

    parentRef.current?.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => parentRef.current?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    async function getProducts() {
      try {
        if (!categorySlug) return;

        const data = await fetchProducts({ categorySlug });

        setProducts(
          data.map((product: any) => ({
            id: product.id,
            image: product.attributes.photo.data.attributes.url,
            description: product.attributes.description,
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

    if (categorySlug) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    if (filterOverlay || selectedProductId) {
      parentRef.current!.style.overflow = "hidden";
    } else {
      parentRef.current!.style.overflow = "scroll";
    }

    if (filterOverlay || (selectedProductId && !categorySlug)) {
      parentRef.current?.classList.remove("backdrop-blur-2xl");
    } else {
      parentRef.current?.classList.add("backdrop-blur-2xl");
    }
  }, [filterOverlay, categorySlug, selectedProductId]);

  const filteredProducts = products.filter(
    (product) =>
      product.tracao >= selectedFilters.tracao &&
      product.impulsao >= selectedFilters.impulsao &&
      product.conforto >= selectedFilters.conforto &&
      product.amortecimento >= selectedFilters.amortecimento
  );

  const useFilter = categorySlug === "tenis";

  const selectedProduct = products.find(
    (product) => product.id === selectedProductId
  );

  return (
    <div
      className="lg:pt-0 fixed inset-0 top-0 z-[10002] flex h-full w-full backdrop-blur-2xl bg-white/70 opacity-100 item-center justify-center overflow-scroll"
      ref={parentRef}
      onClick={() => {
        if (!filterOverlay && !selectedProductId) {
          setDisplayProductOverlay(false);
          return;
        }

        setFilterOverlay(false);
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex px-4 gap-8 h-fit"
      >
        <div className="flex flex-col text-center mt-20">
          <button
            className="absolute right-[28px] top-[32px] lg:right-[48px] bg-zinc-100 w-[42px] h-[42px] flex justify-center items-center rounded-full"
            onClick={() => setDisplayProductOverlay(false)}
          >
            <img
              src="/icons/x.svg"
              alt="Ícone de fechamento"
              className="w-[24px] h-[24px]"
            />
          </button>
          <span className="text-black font-bold text-2xl">
            {title ?? "Coleção de produtos"}
          </span>
          <span className="text-lg">{description ?? ""}</span>

          {useFilter && (
            <button
              className="block xl:hidden bg-white p-2 rounded-full my-4"
              onClick={() => setFilterOverlay(true)}
            >
              Filtros
            </button>
          )}

          <div className="flex gap-10 mt-4 lg:px-8">
            {useFilter && (
              <Filter
                className="hidden xl:block"
                setFilterOverlay={setFilterOverlay}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
                availableFilters={availableFilters}
              />
            )}
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <ul className="grid grid-cols-2 lg:grid lg:grid-cols-3 lg:flex-row gap-4 lg:gap-8">
                {(useFilter ? filteredProducts : products).map((product) => (
                  <li key={product.id} className="mb-1 lg:mb-4">
                    <CollectionProduct
                      image={`${
                        process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL ?? ""
                      }${product.image}`}
                      price={product.price}
                      title={product.title}
                      url={product.url}
                      setSelectedProductId={setSelectedProductId}
                      produtId={product.id}
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {selectedProductId && (
        <ProductDetailsOverlay
          image={selectedProduct?.image ?? ""}
          title={selectedProduct?.title ?? ""}
          description={selectedProduct?.description ?? ""}
          price={selectedProduct?.price ?? 0}
          url={selectedProduct?.url ?? ""}
          setSelectedProductId={setSelectedProductId}
          scrollPosition={scrollPosition}
        />
      )}
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
