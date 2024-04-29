'use client'

import React, { useEffect, useState } from 'react'
import Balloon from "@/components/home/Balloon";
import Header from "@/components/Header";
import StatBox from "@/components/home/StatBox";
import { Box } from "@chakra-ui/react";
import ReadyToPump from '@/components/home/ReadyToPump';
import CurrentHeightProgress from './CurrentHeightProgress';
import { motion, AnimatePresence } from 'framer-motion';


const Home = () => {
  const [showReadyToPump, setShowReadyToPump] = useState(true);

  return (
    <>
        <Box position="relative" minH="100vh" w="full" overflow="hidden">
          <Balloon />
          <Header />
          <StatBox height={0} farmersPumped={100000}/>
          <AnimatePresence>
            {showReadyToPump ? (
              <motion.div key="readyToPump" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                <ReadyToPump />
              </motion.div>
            ) : (
              <motion.div key="currentHeightProgress" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                <CurrentHeightProgress />
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
    </>
  )
}

export default Home