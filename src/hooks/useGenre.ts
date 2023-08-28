// import useData from "./useData";
import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// const useGenre = () => useData<Genre>("/genres");

const useGenre = () => ({ data: genre, error: null, isLoading: false });
export default useGenre;
