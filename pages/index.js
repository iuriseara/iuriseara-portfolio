import Head from 'next/head'
import { Text } from '@chakra-ui/react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import { Stack } from '@chakra-ui/react'
import Project from '../components/Project'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <Stack shouldWrapChildren="true" wrap>
    <Nav/>
    <Hero/>
    <Project/>
    <Footer/>
    </Stack>
  
  )
}
