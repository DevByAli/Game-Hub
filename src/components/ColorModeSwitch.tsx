import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack marginLeft={8}>
      <Switch
        colorScheme="purple"
        isChecked={colorMode === "dark"}
        onChange={() => toggleColorMode()}
      />
      <Text margin={0} whiteSpace={'nowrap'}>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
