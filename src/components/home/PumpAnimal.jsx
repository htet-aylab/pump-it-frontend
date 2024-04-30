import { Box, Image, Text } from "@chakra-ui/react";
import React from 'react'
import { motion } from "framer-motion";

const currentHeightMessageBoxStyle = { 
    position: 'absolute',
    left: '75%',
    top: '20%',
    zIndex: 3,
    minW: '200px',
    minH: '100px',
    bgColor: "#fff",
    border: "2px solid #000",
    borderRadius: '10px',
    p: "15px",
    display: "flex",
    justifyContent: "start",
    alignItems: 'start',
    flexDirection: 'column',
    gap: '5px',
    '::before': {
      content: "''",
      position: 'absolute',
      bottom: '10px',
      left: '0%',
      transform: 'translateX(-50%) rotateY(0deg)',
      width: '0',
      height: '0',
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      borderBottom: '10px solid #fff',
    }
};


const PumpAnimal = () => {
  return (
    <>
        <Box position="absolute" bottom={0} left={0} zIndex={4}>
            <Box position={'relative'}>
                <motion.div
                initial={{ transform: "rotate(0deg)", }}
                animate={{ transform: "rotate(0deg)", }}
                // transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                <Box>
                    <motion.div 
                        initial={{ width: "0px", }}
                        animate={{ width: "100%", }}
                        transition={{ duration: 1 }}
                    >
                    <Image
                        src="/assets/svgs/pump-guy.svg"
                        alt="pump guy"
                        w={'300px'}
                        h={'300px'}
                        zIndex="4"
                    />
                    </motion.div>
                </Box>
                </motion.div>

                {/* Current height message box */}
                <Box sx={{ ...currentHeightMessageBoxStyle }}>
                    <Text>
                    Current Height:
                    </Text>

                    <Text fontWeight={'bold'} fontSize={'16px'}>
                        102,376,937 ft
                    </Text>

                    <Text color={'#043BFF'}>
                    56%
                    </Text>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default PumpAnimal