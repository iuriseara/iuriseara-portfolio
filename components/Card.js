import {
  Box,
  Center,
  useColorMode,
  Heading,
  Text,
  Stack,
  Image,
  Divider,
  Link,
  Badge
} from '@chakra-ui/react';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { IoShareOutline } from "react-icons/io5";



export default function Card({title, image, description, tech, repo, website, youtube}) {
const { colorMode, toggleColorMode } = useColorMode()

const color = {
    light: 'black',
    dark: 'white'
}

const bgColor = {
    light: 'white',
    dark: 'gray.800' 
}
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={bgColor[colorMode]}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 3,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>

        <Stack pt={5} align="center" direction={'row-reverse'}>
            <Link href={`${youtube}`} isExternal>
                <FaYoutube size={30} color="red"/>
            </Link>
            <Link href={`${repo}`} isExternal>
                <FaGithub size={28} color={color[colorMode]}/>
            </Link>
            <Link href={`${website}`} isExternal color={color[colorMode]}>
                <IoShareOutline size={30} color={color[colorMode]}/>
            </Link>
        </Stack>

        <Stack pt={8} align={'flex-start'}>
        <Divider/>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} color={color[colorMode]}>
            {title}
          </Heading>
          <Text color={'gray.500'} fontSize={'sm'}>
            {description}
          </Text>
          <Box d={'flex-end'} align={'baseline'} shouldWrapChildren>
              {tech.map(stack => {
                return (
                <Badge fontWeight={700} fontSize={'sm'} colorScheme="green" mr='1'>
                  {stack}
              </Badge> 
                )
              })}
          </Box>
        </Stack>
      </Box>
    </Center>
  );
}