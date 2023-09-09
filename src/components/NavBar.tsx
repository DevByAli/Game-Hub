import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Prop {
  onClickLogo: () => void;
}

const NavBar = ({ onClickLogo }: Prop) => {
  return (
    <HStack padding="10px">
      <Image
        cursor={"pointer"}
        onClick={onClickLogo}
        backgroundColor="#1a202c"
        borderRadius="35px"
        src={logo}
        boxSize="70px"
      ></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
