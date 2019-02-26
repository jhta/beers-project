import React, { useEffect } from 'react'
import { Box, Card, Heading, Text, Flex, Image } from 'rebass'
import styled from 'styled-components'

import { getRandomBeersBypage } from 'services/beer'

import {
  selectors as todoSelectors,
  actions as todoActions,
} from 'reducers/todo'
import { asPage } from 'lib'

const Index = props => {
  console.log('props', props)
  return (
    <Box width={[1]} color="black" p={[4]}>
      <p>Hello World!</p>
      <Box>
        {props.beers.map((beer, key) => (
          <BeerCard key={key} {...beer} />
        ))}
      </Box>
    </Box>
  )
}

Index.defaultProps = {
  beers: [],
}

const BeerCard = ({ nameDisplay, createDate, description, logo }) => (
  <Card border={1}>
    <Flex>
      <Card width={220} border={1}>
        <StyledImage width={220} height={200} src={logo} />
      </Card>
      <Box p={[3]}>
        <Heading pb={[2]}>{nameDisplay}</Heading>
        <Text pb={[2]}>{createDate}</Text>
        <Text>{description}</Text>
      </Box>
    </Flex>
  </Card>
)

const StyledImage = styled(Image)`
  min-width: 220px;
`

Index.getInitialProps = async () => {
  try {
    const { data, error } = await getRandomBeersBypage()
    return { ...data, error }
  } catch (error) {
    return {
      error: error,
    }
  }
}

export default asPage(Index)
