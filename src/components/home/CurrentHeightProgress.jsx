import React from 'react'
import { Box, Flex, Image, Text } from "@chakra-ui/react";
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

  
const CurrentHeightProgress = () => {
  return (
    <>
      <Box position="absolute" bottom="0px" width="100%">
        <Flex justify="space-between" alignItems={'center'}>
          
          {/* Pump Guy */}
          <Box position="relative">
              <motion.div
                initial={{ transform: "rotate(0deg)", }}
                animate={{ transform: "rotate(0deg)", }}
                // transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                <Box>
                  <motion.div 
                    transition={{ duration: .5 }}
                    // whileHover={{ scale: 1.1 }}
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

          {/* Progress Bar */}
          <Box sx={{ 
            w: '80%',
            h: '40px',
            position: 'absolute',
            left: "50%",
            top: "60%",
            transform: "translate(-50%,40%)",
            border: '3px solid #000',
            backgroundColor: "#ffffff",
            flexGrow: 1,
            zIndex: -1,
            overflow: 'hidden'
           }}>
              <Box sx={{ 
                w: '60%',
                h: '100%',
                backgroundColor: "#E64EFF",
                borderRight: "3px solid #000"
              }}>
                
              </Box>
          </Box>

          {/* Pump */}
          <Box position="relative" top={'20px'} right={'30px'}>
        
            <Box transform={"rotate(30deg)"}>
                <motion.div 
                transition={{ duration: .5 }}
                whileHover={{ scale: 1.1 }}>
                <Image
                    src="/assets/svgs/pump-bottle.svg"
                    alt="get pumpers"
                    zIndex="4"
                    w={'150px'}
                    h={'150px'}
                    objectFit={'contain'}
                />
                </motion.div>
            </Box>

            <motion.div
                initial={{ transform: "translateY(0px)", }}
                animate={{ transform: "translateY(10px)", }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
                <Box
                position="absolute"
                top={"-50%"}
                left="40%"
                transform="translate(-20%,-145px) rotate(30deg)"
                zIndex="-1"
                >
                <Image
                    src="/assets/svgs/pump-gun.svg"
                    alt="get pumpers"
                    zIndex="-1"
                />
                </Box>
            </motion.div>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default CurrentHeightProgress