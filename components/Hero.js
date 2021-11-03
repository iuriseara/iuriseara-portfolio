import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorMode,
  createIcon,
} from '@chakra-ui/react';

export default function Hero() {
    const { colorMode, toggleColorMode } = useColorMode()

    const color = {
        light: 'black',
        dark: 'white'
    }

    const accentColor = {
        light: 'green.300',
        dark: 'green.200'
    }

    const hoverColor = {
        light: 'green.400',
        dark: 'green.300'
    }

  return (
    <>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'left'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={700}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}
            color={color[colorMode]}
            >
            Hey, I'm Iuri.  <br />
            <Text as={'span'} color={accentColor[colorMode]}>
              I build things for the web.
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. 
          Currently, I’m focused on building accessible, human-centered products
          </Text>
          <Stack
            direction={'row'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'green'}
              bg={accentColor[colorMode]}
              rounded={'full'}
              px={6}
              _hover={{
                bg: 'green.300',
              }}>
              Resume
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              About Me
            </Button>

          </Stack>
        </Stack>
      </Container>
    </>
  );
}

