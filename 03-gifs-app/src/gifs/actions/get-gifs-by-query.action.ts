import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";
import { giphyApi } from "../api/giphy.api";
import axios from "axios";

export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
  try {
    const { data } = await giphyApi.get<GiphyResponse>("/search", {
      params: {
        q: query,
        limit: 10,
        lang: "es",
        api_key: import.meta.env.VITE_GIPHY_KEY,
      },
    });

    return data.data.map((gif) => ({
      id: gif.id,
      title: gif.title || "Sin título",
      url: gif.images.downsized_medium.url ?? gif.images.original.url,
      width: Number(
        gif.images.downsized_medium.width ?? gif.images.original.width
      ),
      height: Number(
        gif.images.downsized_medium.height ?? gif.images.original.height
      ),
    }));
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error("Giphy error:", err.response?.status, err.response?.data);
    } else {
      console.error(err);
    }
    throw err;
  }
};
