import React from "react";
import Head from "next/head";
import {
  Button,
  VStack,
  HStack,
  Text,
  IconButton,
  Heading,
  Wrap,
} from "@chakra-ui/react";
import Layout from "../components/Layout/Layout"


const About = () => (
  <Layout>
    <VStack spacing={8}>
   
        <VStack align="start">
          <Heading as="h1">About</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima alias quam, tenetur id amet voluptate voluptatibus! Magnam nulla at cupiditate quas? Distinctio obcaecati quis debitis, ipsam voluptatum amet maiores necessitatibus.
            Culpa, quas. Modi nulla et obcaecati qui vero quam hic veritatis laboriosam cumque maiores, explicabo dignissimos ratione distinctio. Vitae maiores, facilis quasi eligendi ipsum cumque iste beatae? Nam, maiores velit.
            Soluta id suscipit atque reprehenderit cupiditate vitae libero quasi voluptatem, asperiores omnis! Doloremque, accusantium ex. Incidunt neque, animi reiciendis dolor iusto, dolorum dolore fugit repellendus natus ad ea, aspernatur culpa!
            Vel eos ab suscipit modi, unde quo odio expedita adipisci sed nostrum doloremque voluptate totam animi, ipsum harum. Et amet quas delectus ullam, nostrum accusantium quasi saepe dolore repudiandae corrupti?
          </Text>
        </VStack>
      
      
        <VStack align="stretch" spacing={4}>
          <Heading as="h3" size="lg">
            Work
          </Heading>
          <Text>
           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit recusandae odio eaque cum tempore laudantium quam facilis reiciendis, assumenda sed saepe nihil voluptates ducimus quo porro numquam optio quibusdam iste.
           Cumque accusamus ea dolor quisquam voluptates nisi, odit quasi non deserunt cupiditate ullam recusandae velit minima nemo quas commodi sit nesciunt impedit assumenda soluta accusantium. Tempora reiciendis nihil nesciunt blanditiis?
           Eos unde molestias laudantium. Consequuntur laudantium similique esse, rerum fuga odit, voluptatibus natus cumque eveniet accusantium nostrum inventore asperiores quasi harum! Fugiat, corrupti? Consequatur, fugit veniam laborum quod ipsum laudantium!
           Perferendis eos rerum modi itaque deserunt debitis mollitia consequatur ipsa delectus totam! Minima est vero facilis at a voluptate sunt voluptates, enim, velit nesciunt placeat natus! Similique fugit placeat tempora.
          </Text>
        </VStack>
     
        <VStack align="stretch" spacing={4}>
          <Heading as="h2">😁</Heading>
          <Wrap>
            {/* {interests.like.map((el) => (
              <InterestTag name={el} like />
            ))} */}
          </Wrap>
        </VStack>
     
      
        <VStack align="stretch" spacing={4}>
          <Heading as="h2">😒</Heading>
          <Wrap>
            {/* {interests.dislike.map((el) => (
              <InterestTag name={el} />
            ))} */}
          </Wrap>
        </VStack>
     
    </VStack>
  </Layout>
);

export default About;