import { useState } from 'react'
import {
  useColorMode,
  Switch,
  Flex,
  Button,
  Heading,
  Stack,
  Spacer,
  Box,
  IconButton
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'
import DarkModeSwitch from '../components/DarkModeSwitch'


const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const [display, changeDisplay] = useState('none')

  const color = {
    light: 'black',
    dark: 'white'
  }

  const overlayColor = {
      light: 'gray.50',
      dark: '#171717'
  }

  const Logo = () => {
    return (
        <svg 
        width={38}
        height={38} 
        fill={color[colorMode]}
        id="Layer_1" data-name="Layer 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 150.77 269.8">
        <path d="M468.15,398.6a33.5,33.5,0,1,1-33.5-33.5A33.13,33.13,0,0,1,468.15,398.6Zm-63.39,56.91h35.3c19.45,0,23.77,5.41,24.49,17.65,0,88.26.36,73.49.36,161.74H431.05c-21.25,0-26.29-7.2-26.29-26.3Z" transform="translate(-401.15 -365.1)"/>
        <path d="M484.92,601.4a33.5,33.5,0,1,1,33.5,33.5A33.13,33.13,0,0,1,484.92,601.4Zm63.4-56.91H513c-19.46,0-23.78-5.41-24.5-17.65,0-88.26-.36-73.49-.36-161.74H522c21.25,0,26.3,7.2,26.3,26.3Z" transform="translate(-401.15 -365.1)"/>
        </svg>
    );
  }

  return (
    <Flex height="15vh">
      <Flex
        top="1rem"
        right="1rem"
        align="center"
        pr="1rem"
        pl="2.5rem"
        w="100vw"
      >
      <Box p="2">
            <Logo/>
      </Box>
      <Spacer/>
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'flex','flex']}
        >
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
                    </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              About
                    </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Contact
                    </Button>
          </NextLink>
        </Flex>

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon color={color[colorMode]}/>
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'none', 'none']}
        />
        <DarkModeSwitch/>
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor={overlayColor[colorMode]}
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        zIndex={20}
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon color={color[colorMode]}/>
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
          margin="25vh"
        >
          <NextLink href="/" passHref>
                <Button
                as="a"
                variant="ghost"
                aria-label="Home"
                fontSize="3xl"
                my={5}
                color={color[colorMode]}>
                Home
                </Button>
          </NextLink>

          <NextLink href="/about" passHref>
                <Button
                as="a"
                variant="ghost"
                aria-label="About"
                fontSize="3xl"
                my={5}
                color={color[colorMode]}>
                About
                </Button>
          </NextLink>

          <NextLink href="/contact" passHref>
                <Button
                as="a"
                variant="ghost"
                fontSize="3xl"
                aria-label="Contact"
                my={5}
                color={color[colorMode]}>
                Contact
                </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Nav