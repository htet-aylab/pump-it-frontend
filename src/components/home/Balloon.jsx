'use client';

import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Balloon = ({isReadyToPump, startPump, isPumping}) => {
  
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
    <AnimatePresence>
      <motion.div
        style={{
          position: "absolute",
          backgroundImage: "url('/assets/images/pump-animation-bg.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          zIndex: "-3"
        }}
        initial={{ backgroundPositionY: startPump ? '0%' : '100%' }}
        animate={{ backgroundPositionY: startPump ? '0%' : '100%' }}
        exit={{ backgroundPositionY: startPump ? '0%' : '100%' }}
        transition={{ duration: 1, ease: "easeInOut" }}
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
      </motion.div>
      
      {
        isPumping && (
          <motion.div
            initial={{ rotate: -5, position: 'absolute', bottom: 0, left: 0, zIndex: 3 }}
            animate={{
              rotate: [5, -5, 5], 
              transition: { duration: 2, repeat: Infinity }
            }}
            style={{ 
              width: '100%', 
              height: '100%', 
              background: 'url("/assets/images/air.png")', 
              backgroundSize: 'cover'
            }}
          />
        )
      }
    </AnimatePresence>
  );
};

export default Balloon;
