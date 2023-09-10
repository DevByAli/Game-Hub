import { SimpleGrid, Text } from "@chakra-ui/react";
import  Game  from "../entities/Game";
import CriticScore from "./CriticSccore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text margin={0} key={platform.id}>
            {platform.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="MetaCritic">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text margin={0} key={genre.id}>
            {genre.name}
          </Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text margin={0} key={publisher.id}>
            {publisher.name}
          </Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};
export default GameAttributes;
