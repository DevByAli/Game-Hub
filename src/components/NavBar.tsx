import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useGameQueryStore from "../Store";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const resetState = useGameQueryStore((s) => s.resetState);
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          cursor={"pointer"}
          backgroundColor="#1a202c"
          onClick={resetState}
          borderRadius="35px"
          src={logo}
          boxSize="70px"
          objectFit={"cover"}
        ></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
