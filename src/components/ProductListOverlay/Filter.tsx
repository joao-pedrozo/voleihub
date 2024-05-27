export default function Filter({
  className,
  setFilterOverlay,
  selectedFilters,
  setSelectedFilters,
  availableFilters,
}: {
  className?: string;
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
    <div
      className={`bg-white p-8 lg:p-12 xl:p-8 rounded-lg self-center xl:self-baseline max-w-[360px] lg:max-w-[460px] xl:max-w-[360px] ${className}`}
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
