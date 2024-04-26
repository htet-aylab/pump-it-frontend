import { Box, Image } from "@chakra-ui/react";
import React from "react";

const Balloon = () => {
  return (
    <Box
    position="absolute"
      bgImage="url('/assets/pngs/bg-sky.png')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="100%"
      w="100%"
      zIndex="0"
    >
      <Image
        src="/assets/svgs/balloon.svg"
        alt="Balloon"
        position="absolute"
        left="50%"
        top="50%"
        transform="translate(-50%, -50%) scale(0.8)"
        zIndex="0"
        // Apply float animation here
      />
    </Box>
  );
};

export default Balloon;
