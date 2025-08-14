import type { GiphyApiresponse } from "../data/giphy.response";

const API_KEY = "th8LwB7rmHhQkGiPHPsM6VejTeKu1Kzm";

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.appendChild(imgElement);
};

const getRandomGifUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );

  const { data }: GiphyApiresponse = await response.json();

  return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM);
