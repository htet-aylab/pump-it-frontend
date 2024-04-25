import React from "react";
import { Flex, Box, Button, Image, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const Header = () => {
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
        <NextLink href="/" passHref>
          <Link zIndex="2" position="relative">
            <Image src="/assets/svgs/nav-home.svg" alt="Home" />
          </Link>
        </NextLink>

        <NextLink href="/claim-nft" passHref>
          <Link position="relative" left={-12} zIndex="1">
            {" "}
            <Image src="/assets/svgs/nav-claim-nft.svg" alt="Claim NFT" />
          </Link>
        </NextLink>
      </Flex>

      <Flex align="center">
        <Link href="#" isExternal ml={2}>
          <Image src="/assets/svgs/telegram-icon.svg" alt="telegram" />
        </Link>
        <Link href="#" isExternal ml={2}>
          <Image src="/assets/svgs/facebook-icon.svg" alt="Facebook" />
        </Link>
        <Link href="#" isExternal ml={2}>
          <Image src="/assets/svgs/twitter-icon.svg" alt="twitter" />
        </Link>
        <Link href="#" isExternal ml={2}>
          <Image src="/assets/svgs/discord-icon.svg" alt="Discord" />
        </Link>
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
