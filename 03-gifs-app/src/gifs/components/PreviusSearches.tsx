import type { FC } from "react";

interface PreviousSearchesProps {
  searches: string[];
  onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({
  searches,
  onLabelClicked
}) => {
  return (
    <div className="previous-searches">
      <h2>Búsquedas Previas</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li
            key={term}
            onClick={() => onLabelClicked(term)}
            style={{ cursor: "pointer" }}
          >
            {term}
          </li>
        ))}
      </ul>
    </div>
  );
};
