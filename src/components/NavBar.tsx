import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Prop {
  onClickLogo: () => void;
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onClickLogo, onSearch }: Prop) => {
  return (
    <HStack padding="10px">
      <Image
        cursor={"pointer"}
        onClick={onClickLogo}
        backgroundColor="#1a202c"
        borderRadius="35px"
        src={logo}
        boxSize="70px"
        marginRight={8}
      ></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
