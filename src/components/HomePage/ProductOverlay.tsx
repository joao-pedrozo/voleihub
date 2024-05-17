import CollectionProduct from "@/components/CollectionProduct";

interface ProductOverlayProps {
  setDisplayProductOverlay: (value: boolean) => void;
}

export default function ProductOverlay({
  setDisplayProductOverlay,
}: ProductOverlayProps) {
  return (
    <div
      className="py-12 lg:pt-0 fixed inset-0 top-0 z-[10002] flex h-full w-full backdrop-blur-2xl bg-white/70 opacity-100 item-center justify-center overflow-scroll"
      onClick={() => setDisplayProductOverlay(false)}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="flex flex-col text-center h-fit lg:self-center lg:mt-[-56px]"
      >
        <span className="text-black font-bold text-2xl">Tênis</span>
        <span className="text-lg">28 produtos</span>

        <ul className="mt-4 flex flex-col lg:flex-row gap-6">
          <li>
            <CollectionProduct
              image="/images/p-1.webp"
              price={288.99}
              title="Asics Gel Lyte III"
              url="/"
            />
          </li>
          <li>
            <CollectionProduct
              image="/images/p-1.webp"
              price={250.99}
              title="Nike Air Max 90"
              url="/"
            />
          </li>
          <li>
            <CollectionProduct
              image="/images/p-1.webp"
              price={233.44}
              title="Adidas Superstar"
              url="/"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
