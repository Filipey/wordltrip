import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface CardProps {
  icon: string
  text: string
}

export function Card({ icon, text }: CardProps) {
  const isMobileVersion = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobileVersion ? (
        <Image src={`/icons/${icon}.svg`} w="85px" h="85px" mb="6" />
      ) : (
        <Text color="yellow.400" fontSize="xl" mr="2">
          •
        </Text>
      )}
      <Text fontWeight="600" color="gray.700" fontSize={['md', 'xl', '2xl']}>
        {text}
      </Text>
    </Flex>
  )
}
