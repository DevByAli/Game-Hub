import { useQueryClient } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import { Genre } from "./useGenres";

const useGenre = (id?: number) => {
  const queryClient = useQueryClient();
  const genres = queryClient.getQueryData<FetchResponse<Genre>>(["genres"]);
  const genre = genres?.results.find((genre) => genre.id === id);
  return genre?.name;
};
export default useGenre;
