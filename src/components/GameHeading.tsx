import { Heading } from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Genre } from "../hooks/useGenre";
import { FetchResponse } from "../services/api-client";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const queryClient = useQueryClient();
  const genres = queryClient.getQueryData<FetchResponse<Genre>>(["genres"]);
  const genre = genres?.results.find(
    (genre) => genre.id === gameQuery.genreId
  )?.name;

  const heading = `${gameQuery.platform?.name || ""} ${genre || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
