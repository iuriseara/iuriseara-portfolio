import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';


  
  const Logo = (props) => {
      return (
        <svg width={32} 
        height={32} 
        viewBox="0 0 256 257" 
        version="1.1" xmlns="http://www.w3.org/2000/svg" 
        {...props} 
        preserveAspectRatio="xMidYMid">
        <g>
            <path d="M121.239531,0.47435412 C154.258847,-2.24419986 177.973534,6.51949224 203.490026,32.0209539 C231.03887,59.5533708 249.354214,95.2328648 254.290235,133.239251 C259.781839,175.505244 252.228399,207.045826 228.963591,230.137302 C206.717472,252.217693 174.224091,259.500956 130.817584,255.872056 L130.817584,255.872056 L129.020628,255.714401 C92.0580678,252.31591 65.9142731,240.197353 40.5830264,214.542641 C13.525519,187.139558 -0.732370213,156.026391 0.0289819699,123.37039 C0.401368488,107.383336 4.93009017,93.7578927 13.6639513,80.3889177 C19.3897229,71.6244438 25.2046788,64.7874057 37.3681164,52.2487147 L37.3681164,52.2487147 L41.4275324,48.0907013 L45.9022443,43.5551431 C74.7290193,14.5793771 93.7072016,2.74118195 121.239531,0.47435412 Z M201.527922,33.9842216 C176.58625,9.05724142 153.671595,0.589198793 121.467288,3.24065127 C94.3271196,5.47519117 75.6884654,17.3319772 46.5188613,46.8760997 L46.5188613,46.8760997 L44.4086816,49.0171264 C30.1966379,63.4648858 23.5365117,70.8518409 17.66965,79.3947543 L17.66965,79.3947543 L16.8159631,80.6541424 L15.9876804,81.9069942 C7.52700788,94.8577977 3.16375473,107.9854 2.80388584,123.435056 C2.06141566,155.281167 15.9979199,185.693018 42.5581255,212.592447 C67.82505,238.182016 93.7827344,249.991613 131.048788,253.106044 L131.048788,253.106044 L132.897415,253.254431 C174.642425,256.464747 205.76515,249.252143 227.008257,228.167291 C249.578581,205.765126 256.927442,175.078792 251.537704,133.596809 C246.682834,96.2152658 228.654224,61.0943485 201.527922,33.9842216 Z M166.984321,93.3903087 L166.984321,106.949394 L138.186877,106.949394 L138.186877,184.662246 L123.842281,184.662246 L123.842281,106.949394 L95.044837,106.949394 L95.044837,93.3903087 L166.984321,93.3903087 Z" fill="#262627" fill-rule="nonzero"></path>
        </g>
        </svg>
      );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function SmallCentered() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo />
          <Stack direction={'row'} spacing={6}>
            <Link href={'#'}>Home</Link>
            <Link href={'#'}>About</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact</Link>
          </Stack>
        </Container>
  
        <Box
          borderTopWidth={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container
            as={Stack}
            maxW={'6xl'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}>
            <Text>© 2021 Iuri Seara. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }