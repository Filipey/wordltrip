import { Grid, GridItem } from '@chakra-ui/react'
import { Card } from './Card'

export function Cards() {
  return (
    <Grid
      templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      w="100%"
      justifyContent="space-between"
      mt={['10', '32']}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Card icon="Nightlife" text="Vida noturna" />
      </GridItem>
      <GridItem>
        <Card icon="Beach" text="Praia" />
      </GridItem>
      <GridItem>
        <Card icon="Modern" text="Moderno" />
      </GridItem>
      <GridItem>
        <Card icon="Classic" text="Clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Card icon="More" text="E mais..." />
      </GridItem>
    </Grid>
  )
}
