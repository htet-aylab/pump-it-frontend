import React from 'react'
import Balloon from "@/components/home/Balloon";
import Header from "@/components/Header";
import PumpingBox from "@/components/home/PumpingBox";
import StatBox from "@/components/home/StatBox";
import { Box } from "@chakra-ui/react";


const Home = () => {
  return (
    <>
        <Box position="relative" minH="100vh" w="full" overflow="hidden">
        <Balloon />
        <Header />
        <StatBox height={0} farmersPumped={100000}/>
        <PumpingBox />
        </Box>
    </>
  )
}

export default Home