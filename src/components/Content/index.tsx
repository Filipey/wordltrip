import { Grid, Text } from '@chakra-ui/react'
import { Infos } from './Infos'

interface ContentProps {
  description: string
  countries: string
  languages: string
  cities: string
  citiesNames: string[]
}

export function Content({
  description,
  countries,
  languages,
  cities,
  citiesNames
}: ContentProps) {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={['8', '20']}
    >
      <Text
        fontSize={['lg', 'xl', 'xl', '2xl']}
        color="gray.700"
        textAlign="justify"
      >
        {description}
      </Text>
      <Infos
        countries={countries}
        languages={languages}
        cities={cities}
        citiesNames={citiesNames}
      />
    </Grid>
  )
}
