import { useState } from "react";
import { GifList } from "./gifs/components/GigList";
import { PreviousSearches } from "./gifs/components/PreviusSearches";
import { CustomHeader } from "./mock-dat/shared/components/CustomHeader";
import { SearchBar } from "./mock-dat/shared/components/SearchBar";
import { getGifsByQuery } from "./gifs/actions/get-gifs-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[]>([]);

  const handleTermClicked = (term: string) => {
    handleSearch(term);
  };

  const handleSearch = async (raw: string = "") => {
    if (!raw.trim()) return;

    let query = raw.trim().toLowerCase();
    if (previousTerms.includes(query)) return;

    setPreviousTerms((prev) => [query, ...prev].slice(0, 8));

    try {
      const results = await getGifsByQuery(query);
      setGifs(results);                          // <--- guardar gifs
    } catch (e) {
      console.warn("No se pudieron obtener gifs para:", query);
    }
  };

  return (
    <>
      <CustomHeader title="Buscador de Gifs" subtitle="Encuentra los mejores gifs aquí" />

      <SearchBar placeholder="Buscar gifs..." onQuery={handleSearch} />

      <PreviousSearches
        searches={previousTerms}
        onLabelClicked={handleTermClicked}
      />

      {/* Mostrar resultados en GifList */}
      <GifList gifs={gifs} />
    </>
  );
};
