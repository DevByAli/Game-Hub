import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Prop {
  children: string;
}

const ExpandableText = ({ children }: Prop) => {
  const [isExpanded, setExpand] = useState(false);
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = isExpanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      {summary}
      <Button
        size="xs"
        marginLeft={1}
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpand(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </>
  );
};
export default ExpandableText;
