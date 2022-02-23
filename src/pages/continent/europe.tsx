import { Flex } from '@chakra-ui/react'
import { Cities } from '../../components/Cities'
import { Content } from '../../components/Content'
import { ContinentBanner } from '../../components/ContinentBanner'
import { Header } from '../../components/Header'

export default function Europe() {
  const description =
    'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste'

  const places = [
    {
      country: 'Reino Unido',
      city: 'Londres'
    },
    {
      country: 'Franca',
      city: 'Paris'
    },
    {
      country: 'Italia',
      city: 'Roma'
    },
    {
      country: 'Republica Tcheca',
      city: 'Praga'
    },
    {
      country: 'Holanda',
      city: 'Amsterda'
    }
  ]

  const citiesNames = ['Londres', 'Paris', 'Roma', 'Praga', 'Amsterdã']

  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner imgPath="europeBanner" continentName="Europa" />

      <Flex direction="column" maxWidth="1160px" mx="auto" mb="10" px="1rem">
        <Content
          description={description}
          countries="50"
          languages="60"
          cities="27"
          citiesNames={citiesNames}
        />

        <Cities places={places} />
      </Flex>
    </Flex>
  )
}
