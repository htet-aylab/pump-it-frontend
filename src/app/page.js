import Balloon from "@/components/Balloon";
import Header from "@/components/Header";
import PumpingBox from "@/components/PumpingBox";
import StatBox from "@/components/StatBox";
import { Box, Image, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box position="relative" h="120vh" w="full" overflow="hidden">
      <Balloon />
      <Header />
      <StatBox height={0} farmersPumped={100000}/>
      <PumpingBox />
    </Box>
  );
}
