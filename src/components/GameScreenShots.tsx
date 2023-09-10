import { Spinner, Image, SimpleGrid } from "@chakra-ui/react";
import useScreenShots from "../hooks/useScreenShots";

interface Prop {
  gameId: number;
}

const GameScreenShots = ({ gameId }: Prop) => {
  const { data, error, isLoading } = useScreenShots(gameId);

  if (error) throw error;
  if (isLoading) return <Spinner />;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2 }>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image}></Image>
      ))}
    </SimpleGrid>
  );
};
export default GameScreenShots;
