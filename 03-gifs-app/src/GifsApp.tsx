import { useState } from "react";
import { GifList } from "./gifs/components/GigList";
import { PreviousSearches } from "./gifs/components/PreviusSearches";
import { mockGifs } from "./mock-dat/gifs.mock.data";
import { CustomHeader } from "./mock-dat/shared/components/CustomHeader";
import { SearchBar } from "./mock-dat/shared/components/SearchBar";

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(['ghost']);

    const handleTermClicked = (term: string) => {
        console.log("Seleccionaste:", term);
    };

    const handleSearch = (query: string) => {
        console.log({ query });
    };

  return (
    <>
      <CustomHeader title="Buscador de Gifs" subtitle="Encuentra los mejores gifs aquí" />

      <SearchBar
        placeholder="Buscar gifs..."
        onQuery={handleSearch}
      />

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={(term: string) => handleTermClicked(term)}

      />

      <GifList gifs={mockGifs} />
    </>
  );
};
