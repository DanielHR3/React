import { useEffect, useState, type KeyboardEvent } from "react";

export interface Props {
  onQuery: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onQuery, placeholder = "Buscar..." }: Props) => {


    const [query, setQuery] = useState('');

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        onQuery(query);
      }, 700);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [query, onQuery]);

    const handleSearch = () => {
      onQuery(query);
      // setQuery('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    };

  return (
    <div className="search-container">
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};
