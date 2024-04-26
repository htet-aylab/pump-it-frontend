import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const PumpingBox = () => {
  return (
    <Box position="absolute" bottom="0" width="100%">
      <Flex justify="space-between" paddingX="40px" >
        <Image
          src="/assets/svgs/get-pumpers.svg"
          alt="get pumpers"
          zIndex="1"
          marginBottom="-80px"
        />
        <Image
          src="/assets/svgs/pumper.svg"
          alt="pumper"
          zIndex="1"
        />
      </Flex>
    </Box>
  );
};

export default PumpingBox;
