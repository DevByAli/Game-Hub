import { useQueryClient } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import Platform from "../entities/Platform";

const usePlatform = (id?: number) => {
  const queryClient = useQueryClient();
  const platforms = queryClient.getQueryData<FetchResponse<Platform>>([
    "platforms",
  ]);
  const platform = platforms?.results.find((platform) => platform.id === id);
  return platform?.name;
};
export default usePlatform;
