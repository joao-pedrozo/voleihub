/* eslint-disable @next/next/no-img-element */
import ProductListOverlay from "../ProductListOverlay";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface ProductCollectionProps extends React.HTMLAttributes<HTMLDivElement> {
  setDisplayProductOverlay: (value: boolean) => void;
  title: string;
  description: string;
  image: string;
}

function ProductCollection({
  setDisplayProductOverlay,
  description,
  image,
  title,
  className,
  ...rest
}: ProductCollectionProps) {
  return (
    <div
      className={`bg-neutral-100 hover:bg-neutral-200 transition-all p-6 rounded-lg cursor-pointer ${className}`}
      onClick={() => setDisplayProductOverlay(true)}
      {...rest}
    >
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{description}</p>
      <img
        src={image}
        alt="Ball Image"
        className="w-full h-48 object-cover rounded-lg"
      />
    </div>
  );
}

async function fetchCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories?populate=thumbnail`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );

  const { data } = await response.json();

  return data;
}

export default function CategoriesList() {
  const [displayProductOverlay, setDisplayProductOverlay] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function getCategories() {
      try {
        const data = await fetchCategories();

        setCategories(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getCategories();

    if (displayProductOverlay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [displayProductOverlay]);

  return (
    <>
      {displayProductOverlay && (
        <ProductListOverlay
          categorySlug="tenis"
          setDisplayProductOverlay={setDisplayProductOverlay}
        />
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {/* <ProductCollection
            setDisplayProductOverlay={setDisplayProductOverlay}
            className="md:col-span-2"
            title="Tênis"
            description="Os melhores tênis que você pode encontrar."
            image="/images/c-thumb-1.jpg"
          /> */}
          <>
            {categories.map((category: any) => (
              <ProductCollection
                key={category.id}
                setDisplayProductOverlay={setDisplayProductOverlay}
                title={category.attributes.name}
                description={category.attributes.description}
                image={`${process.env.NEXT_PUBLIC_IMAGE_PROVIDER_URL}${category.attributes.thumbnail.data.attributes.url}`}
              />
            ))}
          </>
        </div>
      )}
    </>
  );
}
