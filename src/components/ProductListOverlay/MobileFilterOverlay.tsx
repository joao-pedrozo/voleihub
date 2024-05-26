import Filter from "./Filter";

export default function MobileFilterOverlay({
  setFilterOverlay,
  selectedFilters,
  setSelectedFilters,
  availableFilters,
}: {
  setFilterOverlay: (value: boolean) => void;
  selectedFilters: {
    tracao: number;
    impulsao: number;
    conforto: number;
    amortecimento: number;
  };
  setSelectedFilters: (value: {
    tracao: number;
    impulsao: number;
    conforto: number;
    amortecimento: number;
  }) => void;
  availableFilters: { id: number; name: string; slug: string }[];
}) {
  return (
    <div className="absolute backdrop-blur-2xl text-center justify-center min-h-screen flex w-full mx-64">
      <Filter
        setFilterOverlay={setFilterOverlay}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        availableFilters={availableFilters}
      />
    </div>
  );
}
