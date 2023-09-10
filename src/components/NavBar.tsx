import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../Store";


const NavBar = () => {
  const resetState = useGameQueryStore((s) => s.resetState);
  return (
    <HStack padding="10px">
      <Image
        cursor={"pointer"}
        onClick={resetState}
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
