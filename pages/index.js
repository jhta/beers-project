import React, { useEffect } from 'react'
import { Box, Card } from 'rebass'

import { getRandomBeersBypage } from 'services/beer'

import {
  selectors as todoSelectors,
  actions as todoActions,
} from 'reducers/todo'
import { asPage } from 'lib'

const Index = props => {
  console.log('props', props.beers)
  return (
    <Box width={[1]} color="black" p={[4]}>
      <p>Hello World!</p>
      <Box>
        {props.beers.map((beer, key) => (
          <Card key={key} border={1}>
            <h2>{beer.nameDisplay}</h2>{' '}
          </Card>
        ))}
      </Box>
    </Box>
  )
}

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
