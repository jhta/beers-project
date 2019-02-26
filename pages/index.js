import React from 'react'
import { Box } from 'rebass'
import BeerList from 'components/pages/default/BeerList'

import { getRandomBeersBypage } from 'services/beer'

import {
  selectors as todoSelectors,
  actions as todoActions,
} from 'reducers/todo'
import { asPage } from 'lib'

const Index = props => {
  return (
    <Box width={[1]} color="black" p={[4]}>
      <p>Hello World!</p>
      <BeerList beers={props.beers} />
    </Box>
  )
}

Index.defaultProps = {
  beers: [],
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
