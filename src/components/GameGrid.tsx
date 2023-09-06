import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSekeleton";
import { GameQuery } from "../App";
import GameCardContainer from "./GameCardContainer";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return <Text>{error.message}</Text>;
  console.log(data);
  return (
    <Box padding="10px">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}

        {data?.pages.map((page) =>
          page.results.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))
        )}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={5}
          py={6}
          px={6}
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          loadingText="Loading"
          colorScheme="gray"
          variant="solid"
          spinnerPlacement="end"
        >
          Load more
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
