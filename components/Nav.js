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
          <Heading color={color[colorMode]} as='h1' size="xl" fontWeight="bold">Iuri Seara</Heading>
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