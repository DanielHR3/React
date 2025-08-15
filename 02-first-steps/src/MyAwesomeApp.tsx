// MyAwesomeApp.tsx
import type { CSSProperties } from "react";

// 🔹 Tipos
type Address = {
  zipCode: number;
  country: string;
};

// 🔹 Datos
const name: string = "Daniel";
const lastName: string = "Hernández";
const favoriteGames: string[] = ["The Division 2", "Call of Duty", "Gears of War"];
const isActive: boolean = true;
const address: Address = {
  zipCode: 12345,
  country: "USA",
};

// 🔹 Estilos
const myStyles: CSSProperties = {
  backgroundColor: "red",
  padding: "10px",
  borderRadius: "5px",
  color: "white",
  fontWeight: "bold",
};

const badgeStyle: CSSProperties = {
  display: "inline-block",
  padding: "4px 10px",
  borderRadius: 999,
  fontWeight: 600,
};

const codeBoxStyle: CSSProperties = {
  padding: 8,
  border: "1px solid #ddd",
  borderRadius: 8,
  background: "#fafafa",
  fontFamily:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
  whiteSpace: "pre-wrap",
};

// 🔹 Componente
export const MyAwesomeApp = () => {
  return (
    <>
      <header>
        <h1>{name}</h1>
        <h3>{lastName}</h3>
      </header>

      <section>
        <h4>Juegos favoritos</h4>
        <ul>
          {favoriteGames.map((game) => (
            <li key={game}>{game}</li>
          ))}
        </ul>
      </section>

      <section>
        <h4>Operaciones rápidas</h4>
        <p style={myStyles}>2 + 2 = {2 + 2}</p>
      </section>

      <section>
        <h4>Estado</h4>
        <span
          style={{
            ...badgeStyle,
            backgroundColor: isActive ? "#e6ffed" : "#ffeaea",
            border: `1px solid ${isActive ? "#34c759" : "#ff3b30"}`,
          }}
        >
          {isActive ? "Activo" : "Inactivo"}
        </span>
      </section>

      <section>
        <h4>Dirección</h4>
        <div style={codeBoxStyle}>{JSON.stringify(address, null, 2)}</div>
      </section>
    </>
  );
};
