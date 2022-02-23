import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Cards } from '../components/Cards'
import { Divider } from '../components/Divider'
import { Heading } from '../components/Heading'
import { Header } from '../components/Header'
import { Slider } from '../components/Slider'

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Cards />
      <Divider />
      <Heading />
      <Slider />
    </Flex>
  )
}

export default Home
