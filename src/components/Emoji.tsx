import { Image, ImageProps } from "@chakra-ui/react";
import thumb_up from "../assets/thumb-up.png";
import board from "../assets/board.png";
import smile from "../assets/smile.png";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: smile, alt: "meh" },
    4: { src: thumb_up, alt: "recommended" },
    5: { src: board, alt: "exceptional", boxSize: "45px" },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" marginTop={2} />;
};

export default Emoji;
