import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useGameQueryStore from "../Store";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  const resetState = useGameQueryStore((s) => s.resetState);
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          cursor={"pointer"}
          onClick={resetState}
          borderRadius="35px"
          src={logo}
          maxWidth="70px"
          width="100%"
          objectFit={"cover"}
        ></Image>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
