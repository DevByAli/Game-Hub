import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box
        minHeight="90vh" // Ensures the container takes up the full height of the viewport
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <Heading>Oops</Heading>
          <Text>
            {isRouteErrorResponse(error)
              ? "This page does not exits"
              : "Sorry, something went wrong!"}
          </Text>
          {/* <Image
            width="70%"
            position={"absolute"}
            bottom="0px"
            right="0px"
            src={notFound}
          ></Image> */}
        </Box>
      </Box>
    </>
  );
};
export default ErrorPage;
