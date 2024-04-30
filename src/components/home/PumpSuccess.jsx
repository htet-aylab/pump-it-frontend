import { Box, Image, Text } from "@chakra-ui/react";
import React from 'react'
import { motion } from "framer-motion";

const currentHeightMessageBoxStyle = { 
    position: 'absolute',
    right: '50%',
    top: '40%',
    zIndex: -3,
    minW: '300px',
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
};


const PumpSuccess = () => {
  return (
    <>
        <Box position="absolute" bottom={0} right={0} zIndex={4}>
            <Box position={'relative'}>
                <motion.div
                initial={{ width: "0px", }}
                animate={{ width: "100%", }}
                transition={{ duration: 1 }}
                >
                <Box>
                    <motion.div 
                    transition={{ duration: .5 }}
                    >
                    <Image
                        src="/assets/svgs/pump-guy-right.svg"
                        alt="pump guy"
                        w={'300px'}
                        h={'300px'}
                        zIndex="4"
                    />
                    </motion.div>
                </Box>
                </motion.div>

                {/* Pump Success Message */}
                <Box sx={{ ...currentHeightMessageBoxStyle }}>
                    <Text>
                        Well done farmer!
                        You just pump the s**t to a new height.
                    </Text>

                    <Text color={'#043BFF'} textAlign={'right'}>
                        Continue {">>>"}
                    </Text> 
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default PumpSuccess