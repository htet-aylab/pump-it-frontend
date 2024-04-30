'use client'

import React, { useEffect, useState } from 'react'
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
import PumpSuccess from './PumpSuccess';


const Home = () => {

  const [isReadyToPump, setIsReadyToPump] = useState(false)
  const [isAlreadyCliamedNft, setIsAlreadyClaimedNft] = useState(true)
  const [startPump, setStartPump] = useState(false)
  const [pumpSuccess, setPumpSuccess] = useState(false)
  const [isPumping, setIsPumping] = useState(false)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (startPump) {
      const timer1 = setTimeout(() => {
        setPumpSuccess(true);
        setIsPumping(false);
      }, 5000);
  
      const timer2 = setTimeout(() => {
        setPumpSuccess(false);
        setIsPumping(false);
        setStartPump(false);
      }, 10000); 
  
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [startPump]);

  return (
    <>
        <Box position="relative" minH="100vh" w="full" overflow="hidden">
          
          <Balloon isReadyToPump={isReadyToPump} startPump={startPump} isPumping={isPumping} />
          
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
                {
                  !pumpSuccess && !isPumping && (
                    <>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>
                        <Link href={'/claim-nft'}>
                          <Board isAlreadyCliamedNft={isAlreadyCliamedNft} />
                        </Link>

                        <AirGunReady 
                          isAlreadyCliamedNft={isAlreadyCliamedNft} 
                          setStartPump={setStartPump} 
                          setIsPumping={setIsPumping} 
                          setHeight={setHeight} />
                          
                      </motion.div>
                    </>
                  )
                }
              </>
            )
          }

          {/* Stats Box */}
          {
            (pumpSuccess || isReadyToPump) && (
              <StatBox height={height} farmersPumped={100000}/>
            )
          }

          {/* Pump Success Message */}
          {
            pumpSuccess && (
              <PumpSuccess />
            )
          }
        </Box>
    </>
  )
}

export default Home