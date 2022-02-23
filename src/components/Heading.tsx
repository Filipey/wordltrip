import { Heading as ChakraHeading } from '@chakra-ui/react'

export function Heading() {
  return (
    <ChakraHeading
      textAlign="center"
      fontWeight="500"
      mb={['5', '14']}
      fontSize={['lg', '3xl', '4xl']}
    >
      Vamos nessa? <br />
      Então escolha seu continente
    </ChakraHeading>
  )
}
