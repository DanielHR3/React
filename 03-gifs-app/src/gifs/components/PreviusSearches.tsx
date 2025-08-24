interface PreviousSearchesProps {
  items?: string[];
  onSelect?: (query: string) => void;
}

export const PreviousSearches = ({
  items = ["Call of Duty", "Battlefield", "The Division II", "Halo"],
  onSelect,
}: PreviousSearchesProps) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas Previas</h2>
      <ul className="previous-searches-list">
        {items.map((item) => (
          <li
            key={item}
            onClick={() => onSelect?.(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
