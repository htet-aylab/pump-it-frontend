import React from 'react'
import { Box } from "@chakra-ui/react";

const ProgressBar = ({percentage}) => {
  return (
    <>
        <Box sx={{ 
            w: '80%',
            h: '40px',
            position: 'absolute',
            bottom: "5%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            border: '3px solid #000',
            backgroundColor: "#ffffff",
            flexGrow: 1,
            zIndex: -1,
            overflow: 'hidden'
           }}>
              <Box sx={{ 
                w: percentage+"%",
                h: '100%',
                backgroundColor: "#E64EFF",
                borderRight: "3px solid #000"
              }}>
                
              </Box>
          </Box>
    </>
  )
}

export default ProgressBar