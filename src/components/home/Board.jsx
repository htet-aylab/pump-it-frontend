'use client'

import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

const Board = ({isAlreadyCliamedNft}) => {
  return (
    <>
        <Box position="absolute" bottom={0} left={0}>
            <Box position={'relative'}>
                
                <Box>
                    <motion.div
                    initial={{ transform: "rotate(0deg)", }}
                    animate={{ transform: "rotate(10deg)", }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    >
                    <Box position={'relative'} bottom={'-250px'} left={'20px'}>
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
                </Box>

                <Box>
                    <Image
                        src="/assets/svgs/board-stick.svg"
                        alt="get pumpers"
                        zIndex="-1"
                    />
                </Box>

                {/* Get Pumpers Now message */}
                {
                    isAlreadyCliamedNft && (
                    <Box zIndex="5" position={'absolute'} top={'150px'} right={'-50px'}>
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
                    )
                }
            </Box>
        </Box>
    </>
  )
}

export default Board