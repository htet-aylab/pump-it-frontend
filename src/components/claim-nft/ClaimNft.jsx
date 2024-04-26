import React from 'react'
import Header from '../Header'
import { Box } from '@chakra-ui/react'
import NftCard from './NftCard'

const ClaimNft = () => {
  return (
    <>
        <Box position="relative" minH="100vh" w="full" overflow="hidden">
            <Box
                position="absolute"
                bgImage="url('/assets/images/pink-sky.png')"
                bgPos="center"
                bgSize="cover"
                bgRepeat="no-repeat"
                h="100%"
                w="100%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex="0">
                
                <NftCard />
            </Box>
            <Header />
        </Box>
    </>
  )
}

export default ClaimNft