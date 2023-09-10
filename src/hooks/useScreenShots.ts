import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { ScreenShots } from "../entities/ScreenShots";
import ms from "ms";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["game", gameId, "ScreenShots"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });
};
export default useScreenShots;
