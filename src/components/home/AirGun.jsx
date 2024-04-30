import React from 'react'
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AirGun = ({onClick}) => {
  return (
    <>
        <Box position="absolute" bottom={0} right={0} zIndex={4} onClick={onClick}>
            <motion.div style={{ position: 'relative' }} 
                initial={{ width: "0px", }}
                animate={{ width: "100%", }}
                transition={{ duration: 1 }}>
                <Box transform={"rotate(0deg)"} position={'absolute'} top={'37px'} right={'-40px'}>
                    <motion.div 
                    transition={{ duration: .5 }}
                    whileHover={{ scale: 1.1 }}>
                    <Image
                        src="/assets/svgs/air-gun-bottle.svg"
                        alt="get pumpers"
                        zIndex="4"
                        objectFit={'contain'}
                    />
                    </motion.div>
                </Box>

                <Box>
                    <motion.div
                        initial={{ transform: "translateY(0px)", }}
                        animate={{ transform: "translateY(10px)", }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    >
                        
                        <Image
                            src="/assets/svgs/air-gun.svg"
                            alt="get pumpers"
                        />
                    </motion.div>
                </Box>
            </motion.div>
      </Box>
    </>
  )
}

export default AirGun