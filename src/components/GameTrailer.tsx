import useTrailer from "../hooks/useTrailer";

interface Prop {
  gameId: number;
}

const GameTrailer = ({ gameId }: Prop) => {
  const { data, error, isLoading } = useTrailer(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video width="100%" src={first.data.max} poster={first.preview} controls />
  ) : null;
};
export default GameTrailer;
