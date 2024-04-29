import React from 'react'
import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AirGunReady = ({isAlreadyCliamedNft}) => {
  return (
    <>
        <Box position="absolute" bottom={0} right={0} zIndex={4}>
            <Box position={'relative'}>
                
                <Box zIndex={1} transform={"rotate(-40deg)"} position={'absolute'} top={'37px'} right={'-40px'}>
                    <motion.div 
                    transition={{ duration: .5 }}
                    whileHover={{ scale: 1.1 }}>
                    <Image
                        src={isAlreadyCliamedNft ? "/assets/svgs/air-gun-bottle.svg" : "/assets/svgs/disabled-air-gun-bottle.svg"}
                        alt="get pumpers"
                        zIndex="4"
                        objectFit={'contain'}
                    />
                    </motion.div>
                </Box>

                <Box transform={"translateX(20px)"} zIndex={-2}>
                    <motion.div
                        initial={{ transform: "translateY(0px)", }}
                        animate={{ transform: "translateY(10px)", }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                    >
                        
                        <Image
                            src="/assets/svgs/air-gun-ready.svg"
                            alt="get pumpers"
                        />
                    </motion.div>
                </Box>

                {/* if already cliamed NFT show ready message */}
               {
                isAlreadyCliamedNft && (
                    <Box
                        position="absolute"
                        top={"20%"}
                        right="10%"
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
                )
               }
                
            </Box>
        </Box>
    </>
  )
}

export default AirGunReady