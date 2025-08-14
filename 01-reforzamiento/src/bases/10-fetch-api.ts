import type { GiphyApiresponse } from "../data/giphy.response";

const API_KEY = "th8LwB7rmHhQkGiPHPsM6VejTeKu1Kzm";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement("img");
  imgElement.src = url;
  document.body.appendChild(imgElement);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyApiresponse) => {
    const imageUrl = data.images.original.url;
    createImageInsideDOM(imageUrl);
  })
  .catch((err) => {
    console.error(err);
  });
