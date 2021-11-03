import {
    Box,
    Heading,
    Container,
    Wrap,
    WrapItem,
    Center,
    Divider,
    Button,
    Stack,
    Icon,
    useColorMode,
    createIcon,
  } from '@chakra-ui/react';
  import Card from '../components/Card'
  
  export default function Project() {
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
      <Stack align="center" pb={8}>
        <Heading color={color[colorMode]} pb={4} as='ins'>Projects</Heading>
        
      </Stack>
        <Container maxW={'90vw'} >
            <Wrap align="center" shouldWrapChildren='true' justify="center" spacing='30px'>
                
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem>
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
                <WrapItem >
                    <Card 
                    title="Project" 
                    description="Description"
                    image="https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80" 
                    repo="https://github.com/"  
                    tech={['React', 'Chakra-UI', 'Next-JS', 'CSS', 'SQL', 'Firestore', 'AWS', 'Node JS' , 'Vanilla JS']} 
                    />
                </WrapItem>
  
            </Wrap>
            
        </Container>
      </>
    );
  }
  
  