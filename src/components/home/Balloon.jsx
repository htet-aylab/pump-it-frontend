'use client';

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Balloon = () => {
  return (
    <Box
      position="absolute"
      bgImage="url('/assets/images/blue-sky.png')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="100%"
      w="100%"
      zIndex="-3"
    >
      <motion.div
        initial={{ transform: "translate(-50%, -50%)", }}
        animate={{ transform: "translate(-50%, -40%)", }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%) scale(1)",
          zIndex: 0
        }}
      >
        <Image
          src="/assets/images/balloon-floating.png"
          alt="Balloon"
        />
      </motion.div>
    </Box>
  );
};

export default Balloon;
