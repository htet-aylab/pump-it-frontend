import Header from "@/components/Header";
import { Box, Image } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      position="relative" // Needed for absolute positioning context
      bgImage="url('/assets/pngs/bg-sky.png')"
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      h="145vh"
      w="full"
    >
      <Header />
      {/* Balloon Image */}
      <Image
        src="/assets/svgs/balloon.svg"
        alt="Balloon"
        position="relative"
        left="50%" 
        top="45%" 
        transform="translate(-50%, -50%)" 
        zIndex="0" 
        // Apply float animation here
      />

      {/* Other content */}
    </Box>
  );
}
