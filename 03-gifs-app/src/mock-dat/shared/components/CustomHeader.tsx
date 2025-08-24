interface Props {
  title: string;
  subtitle?: string;
}

export const CustomHeader = ({}:Props) => {
  return (
   <div className="content-center">
        <h1>Buscador de Gifs</h1>
        <p>Encuentra los mejores gifs aquí</p>
      </div>
  )
}
