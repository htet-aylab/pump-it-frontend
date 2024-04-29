'use client';

import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Balloon = ({isReadyToPump}) => {
  
  const [bolloonStyles, setBolloonStyles] = useState({
    width: '90%',
    height: '100%',
    position: 'relative',
    left: 0,
    top: '-30px',
    objectFit: 'contain'
  })

  useEffect(() => {
    if(isReadyToPump){
      setBolloonStyles({
          width: '70%',
          height: '80%',
          position: 'relative',
          left: '0%',
          transform: 'translateX(20%)',
          top: '50%'
      })
    }
  },[isReadyToPump])

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
          initial={{ transform: "translateY(0px)", }}
          animate={{ transform: "translateY(10px)", }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/assets/images/balloon.png"
          alt="Balloon"
          sx={bolloonStyles}
        />
      </motion.div>
    </Box>
  );
};

export default Balloon;
