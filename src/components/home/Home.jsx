'use client'

import React, { useState } from 'react'
import Balloon from "@/components/home/Balloon";
import Header from "@/components/Header";
import StatBox from "@/components/home/StatBox";
import { Box } from "@chakra-ui/react";
import PumpAnimal from './PumpAnimal';
import AirGun from './AirGun';
import ProgressBar from './ProgressBar';
import Board from './Board';
import { motion } from "framer-motion";
import AirGunReady from './AirGunReady';
import Link from 'next/link';


const Home = () => {

  const [isReadyToPump, setIsReadyToPump] = useState(false)
  const [isAlreadyCliamedNft, setIsAlreadyClaimedNft] = useState(false)

  return (
    <>
        <Box position="relative" minH="100vh" w="full" overflow="hidden">
          
          <Balloon isReadyToPump={isReadyToPump} />
          
          <Header />
        
          {
            !isReadyToPump ? (
                <>
                  {/* This is the first step */}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                    <PumpAnimal />
                    <ProgressBar percentage={60} />
                    <AirGun onClick={() => setIsReadyToPump(true)} />
                  </motion.div>
                </>
            ) : (
              <>
                {/* this is the second step */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>

                  {/* If User have cliamed any nft */}
                  <Link href={'/claim-nft'}>
                    <Board isAlreadyCliamedNft={isAlreadyCliamedNft} />
                  </Link>

                  <AirGunReady isAlreadyCliamedNft={isAlreadyCliamedNft} />

                  <StatBox height={0} farmersPumped={100000}/>
                </motion.div>
              </>
            )
          }
        </Box>
    </>
  )
}

export default Home