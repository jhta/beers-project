import React, { useEffect } from 'react'
import { createUseConnect } from 'react-use-redux'
import { Box } from 'rebass'

import BeerList from 'components/pages/default/BeerList'
import { actions as beerActions } from 'reducers/beers'
import { getRandomBeersBypage } from 'services/beer'

import {
  selectors as todoSelectors,
  actions as todoActions,
} from 'reducers/todo'
import { asPage } from 'lib'

const mapDispatchToProps = dispatch => ({
  requestData: () => dispatch(beerActions.requestBeers()),
})

const useConnect = createUseConnect(state => state, mapDispatchToProps)
const Index = props => {
  const { requestData } = useConnect()

  useEffect(() => {
    requestData()
  }, [])
  console.log('use connect', requestData)
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
