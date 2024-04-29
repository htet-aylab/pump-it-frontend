'use client'

import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const ReadyToPump = () => {
  return (
    <>
      <Box position="absolute" bottom="0" width="100%">
        <Flex justify="space-between" paddingX="20px" >
          {/* Board */}
          <Box position="relative">
            <motion.div
              initial={{ transform: "rotate(0deg)", }}
              animate={{ transform: "rotate(10deg)", }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            >
              <Box transform={"translateY(0%)"}>
                <motion.div 
                  transition={{ duration: .5 }}
                  whileHover={{ scale: 1.1 }}>
                  <Image
                    src="/assets/svgs/board.svg"
                    alt="get pumpers"
                    zIndex="4"
                  />
                </motion.div>
              </Box>
            </motion.div>

            <Box
              position="absolute"
              top={"7%"}
              left="50%"
              transform="translate(-50%,12%)"
              bottom="0"
              zIndex="-1"
            >
              <Image
                src="/assets/svgs/board-stick.svg"
                alt="get pumpers"
                zIndex="-1"
              />
            </Box>

            {/* Get Pumpers Now message */}
            <Box
              position="absolute"
              top={"-40%"}
              left="40%"
              transform="translate(30%,-10%)"
              bottom="0"
              zIndex="5">
                <motion.div
                  initial={{ transform: "rotate(0deg)", }}
                  animate={{ transform: "rotate(5deg)", }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Image
                    src="/assets/svgs/white-msg-box.svg"
                    alt="pump msg box"
                    zIndex="1"
                  />
                </motion.div>
            </Box>
          </Box>

          {/* Pump */}
          <Box position="relative">
            
            <Box transform={"translateY(0%)"}>
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
                transform="translate(-25%,-150px)"
                zIndex="-1"
              >
                <Image
                  src="/assets/svgs/pump-gun.svg"
                  alt="get pumpers"
                  zIndex="-1"
                />
              </Box>
            </motion.div>

            {/* Your Pumper is ready */}
            <Box
              position="absolute"
              top={"20%"}
              right="0%"
              transform="translate(-50%,-20%)"
              bottom="0"
              w={'200px'}
              h={'100px'}
              zIndex="5">
                
                <motion.div
                  initial={{ transform: "rotate(0deg)", }}
                  animate={{ transform: "rotate(5deg)", }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                >
                  <Image
                    src="/assets/svgs/black-msg-box.svg"
                    alt="pump msg box"
                    zIndex="1"
                  />
                </motion.div>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default ReadyToPump;
