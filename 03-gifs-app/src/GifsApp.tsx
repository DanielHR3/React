import { GifList } from "./gifs/components/GigList";
import { PreviousSearches } from "./gifs/components/PreviusSearches";
import { mockGifs } from "./mock-dat/gifs.mock.data";
import { CustomHeader } from "./mock-dat/shared/components/CustomHeader";
import { SearchBar } from "./mock-dat/shared/components/SearchBar";

export const GifsApp = () => {
  return (
    <>
      <CustomHeader title="Buscador de Gifs" subtitle="Encuentra los mejores gifs aquí" />

      <SearchBar
        placeholder="Buscar gifs..."
        onSearch={(query) => console.log("Buscar:", query)}
      />

      <PreviousSearches
        items={["Spec Ops", "Night Vision", "Tactical Reload"]}
        onSelect={(q) => console.log("Seleccionaste:", q)}
      />

      <GifList gifs={mockGifs} />
    </>
  );
};
