import React from 'react'
import { 
    useColorMode,
    Button, 
    Flex, 
    Box, 
    Text, 
    useDisclosure,
    Drawer,
    Input,
    DrawerContent,
    DrawerOverlay,
    DrawerHeader,
    DrawerBody,
    DrawerCloseButton,
    DrawerFooter } from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import DarkModeSwitch from './DarkModeSwitch'

const Navigation = ({children}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const { colorMode } = useColorMode();
    const bgColor = {
        light: 'white',
        dark: '#181818'
    }

    const color = {
        light: 'black',
        dark: 'white'
    }

    const navHoverBg = {
        light: 'gray.600',
        dark: 'gray.300'
    }
    
    const StickyNav = styled(Flex)`
        postion: sticky;
        z-index: 10;
        top: 0;
        backdrop-filter: saturate(180%) blur(20px);
        transition: height .5s, line-height .5s;
    `

    return (
        <>
        {/* <StickyNav
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            maxWidth="800px"
            minWidth="356px"
            width="100%"
            bg={bgColor[colorMode]}
            as="nav"
            w="100vw"
            px={[2, 6, 6]}
            py={2}
            mt={8}
            mb={[0,0,8]}
            mx="auto"
        > */}
        <Flex 
            pos="fixed"
            top='1rem'
            alignItems="center"
            justifyContent="space-between"
            w="100vw"
            px={[2, 6, 20]}
            py={2}
        >

       
                <Text color={color[colorMode]} fontSize="30px" fontWeight="bold">Iuri Seara</Text>


                <Flex>
                    <NextLink href="/" passHref>
                        <Button as="a" variant="ghost" aria-label="Home" w="100%" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Home
                        </Button>
                    </NextLink>

                    <NextLink href="/about" passHref>
                        <Button as="a" variant="ghost" aria-label="About" w="100%" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            About
                        </Button>
                    </NextLink>

                    <NextLink href="/contact" passHref>
                        <Button as="a" variant="ghost" aria-label="Contact" w="100%" p={[1,2,4]} _hover={{ backgroundColor: navHoverBg[colorMode] }}>
                            Contact
                        </Button>
                    </NextLink>
                </Flex>
            
                
                    <DarkModeSwitch/>
          
        </Flex>
        {/* </StickyNav> */}
                
        </>
    )

}

export default Navigation 