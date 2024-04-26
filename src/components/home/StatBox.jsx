import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const StatBox = ({ height, farmersPumped }) => {
  return (
    <Box position="absolute" right="0" marginTop="40px">
      <Box
        bg="black"
        color="white"
        width="362px"
        borderLeftRadius="20px"
        paddingX="6"
        paddingY="4"
        marginBottom="2"
      >
        <Text fontSize="xl">
          CURRENT HEIGHT:
        </Text>
        <Flex justify="space-between" align="center">
          <Text fontSize="3xl">
            {height}
          </Text>
          <Text fontSize="xl">
              ft
            </Text>
        </Flex>
      </Box>

      <Box
        bg="white"
        color="black"
        border="5px solid black"
        borderLeftRadius="20px"
        paddingX="6"
        paddingY="4"
        marginTop="2"
      >
        <Flex justify="space-between" align="center">
          <Text fontSize="3xl">
            {farmersPumped}
          </Text>
          <Text fontSize="xl" >
            farmers pumped
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default StatBox;
