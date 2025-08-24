export interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder = "Buscar..." }: SearchProps) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = (e.target as HTMLInputElement).value.trim();
      onSearch(value);
    }
  };

  const handleClick = () => {
    const input = document.getElementById("search-input") as HTMLInputElement | null;
    const value = input?.value.trim() ?? "";
    onSearch(value);
  };

  return (
    <div className="search-container">
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Buscar</button>
    </div>
  );
};
