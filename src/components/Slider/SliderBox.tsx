import { Flex, Heading, Text } from '@chakra-ui/react'
import Link from 'next/link'

interface SliderBoxProps {
  imgPath: string
  name: string
  description: string
  children?: JSX.Element
}

export function SliderBox({ imgPath, name, description }: SliderBoxProps) {
  return (
    <Flex
      w="100%"
      h="100%"
      align="center"
      justify="center"
      direction="column"
      bgImage={`url(/${imgPath}.svg)`}
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition="center"
      textAlign="center"
    >
      <Link href={`continent/${imgPath}`}>
        <a>
          <Heading
            fontSize={['3xl', '4xl', '5xl']}
            color="gray.100"
            fontWeight="bold"
          >
            {name}
          </Heading>
          <Text
            fontWeight="bold"
            color="gray.300"
            fontSize={['0.8rem', '1xl', '2xl']}
            mt={['2', '4']}
          >
            {description}
          </Text>
        </a>
      </Link>
    </Flex>
  )
}
