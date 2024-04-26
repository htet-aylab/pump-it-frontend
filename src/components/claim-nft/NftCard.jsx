import { Box, Button, Flex, Grid, GridItem, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'

const nftCardStyle = {
    border: '5px solid #000000',
    borderRadius: '20px',
    backgroundColor: '#FFC657',
    padding: '20px',
    width: '80%',
};

const NftCard = () => {
  return (
    <>
        <Box sx={nftCardStyle}>
            <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                <GridItem w='100%'>
                    <Image 
                        src="/assets/images/nft.png"
                        h={'500px'}
                        alt='Nft'
                        objectFit={'contain'}
                    />
                </GridItem>
                <GridItem w='70%' display={'flex'} rowGap={'20px'} flexDirection={'column'} justifyContent={'center'}>
                    <Text textTransform={'uppercase'} fontWeight={'bold'} color={'#000'} fontSize={'35px'}>
                        NFT Name
                    </Text>
                    <Text color={'#000'} fontSize={'16px'}>
                        100,000/999,999 Minted
                    </Text>
                    <Text color={'#000'} fontSize={'16px'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id nibh cursus, porttitor felis sed, sodales nunc. Donec id enim sem. Donec ullamcorper urna quis lobortis convallis. 
                    </Text>

                    {/* Mint Input */}
                    <Flex gap={0}>
                        <Button bgColor={'#FFE925'} 
                                p={'10px'}
                                borderRadius={"10px 0px 0px 10px"}
                                border={'3px solid #000'}>
                            <Image 
                                src='/assets/svgs/arrow-left.svg' 
                                alt='Arrow left'  />
                        </Button>

                        <Input placeholder='Enter Amount' 
                            value={1} 
                            bgColor={'white'} 
                            borderRadius={0} 
                            border={'3px solid #000'} 
                            textAlign={'center'} fontSize={'20px'} />

                        <Button bgColor={'#FFE925'} 
                                p={'10px'}
                                borderRadius={"0px 10px 10px 0px"}
                                border={'3px solid #000'} >
                            <Image 
                                src='/assets/svgs/arrow-right.svg' 
                                alt='Arrow right' />
                        </Button>
                    </Flex>

                    <Button 
                        color={'#000'} 
                        h={'60px'} 
                        bgColor={'#FFE925'} 
                        fontSize={'20px'} 
                        border={'3px solid #000'}>
                        Mint Now
                    </Button>
                </GridItem>
            </Grid>
        </Box>
    </>
  )
}

export default NftCard