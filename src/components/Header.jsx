'use client'

import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { ImageLink } from "./ImageLink";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname()

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="40px 30px 0px 0px"
      color="white"
      position="relative"
      zIndex={2}
    >
      <Flex align="center" position="relative">

        <ImageLink 
          src={pathname == '/' ? "/assets/svgs/nav-home-1.svg" :  "/assets/svgs/nav-home-2.svg"}
          alt="Home" 
          width={0}
          height={0}
          imgStyle={{ 
            width: 'auto',
            height: 'auto',
          }}
          href="/" />

        <ImageLink 
          src={pathname == '/' ? "/assets/svgs/nav-claim-nft-1.svg" :  "/assets/svgs/nav-claim-nft-2.svg"}
          alt="Claim NFT" 
          width={0}
          height={0}
          href="/claim-nft"
          imgStyle={{ 
              width: 'auto',
              height: 'auto',
              position: 'relative',
              left: '-20%',
              zIndex: -1
          }} />
          
      </Flex>

      <Flex align="center" columnGap={'10px'}>
        <ImageLink 
          src="/assets/svgs/telegram-icon.svg" 
          alt="Telegram" 
          width={50}
          height={50}
          href="/" />
        <ImageLink 
          src="/assets/svgs/facebook-icon.svg" 
          alt="Facebook" 
          width={50}
          height={50}
          href="/" />
        <ImageLink 
          src="/assets/svgs/twitter-icon.svg" 
          alt="Twitter" 
          width={50}
          height={50}
          href="/" />
        <ImageLink 
          src="/assets/svgs/discord-icon.svg" 
          alt="Discord" 
          width={50}
          height={50}
          href="/" />

        <Image
          ml={2}
          src="/assets/svgs/connect-wallet.svg"
          alt="connect-wallet"
        />
      </Flex>
    </Flex>
  );
};

export default Header;
