import React, { useEffect } from 'react'
import { createUseConnect } from 'react-use-redux'
import { Box, Flex } from 'rebass'
import { isEmpty } from 'lodash'

import Button from 'ui/Button'
import BeerList from 'components/pages/default/BeerList'
import { getRandomBeersBypage } from 'services/beer'

import BeerLoader from 'ui/Loader'

import { asPage } from 'lib'
import {
  actions as beersActions,
  selectors as beersSelectors,
} from 'reducers/beers'

const mapDispatchToProps = dispatch => ({
  fetchBeers: (page = 1) =>
    dispatch(beersActions.requestBeers({ page: page + 1 })),
  setInitialStoreFromServer: payload => dispatch(beersActions.set(payload)),
})

const mapStateToProps = state => ({
  beers: beersSelectors.getBeers(state),
  page: state.beers.page,
  isLoading: state.beers.isFetchingBeers,
})

const useConnect = createUseConnect(
  mapStateToProps,
  mapDispatchToProps
  // mergeProps
)
const Index = props => {
  const {
    beers,
    setInitialStoreFromServer,
    fetchBeers,
    page,
    isLoading,
  } = useConnect()
  const { numberOfPages } = props

  useEffect(() => {
    setInitialStoreFromServer({
      beers: props.beers,
      page: props.page,
      numberOfPages,
    })
  }, [])

  const newBeers = !isEmpty(beers) ? beers : props.beers

  return (
    <Box width={[1]} color="black" p={[1]} pt={[5]}>
      <BeerList beers={newBeers} />
      <Flex p={[4]} justifyContent="center">
        <LoaderIfNeeded isLoading={isLoading} />
        <ButtonGetMoreIfNeeded
          isLoading={isLoading}
          big
          onClick={() => {
            fetchBeers(page)
          }}
          text={'GET MORE BEERS!'}
        />
      </Flex>
    </Box>
  )
}

const LoaderIfNeeded = ({ isLoading, ...rest }) =>
  isLoading ? <BeerLoader {...rest} /> : null

const ButtonGetMoreIfNeeded = ({ isLoading, text, ...rest }) =>
  !isLoading ? <Button {...rest}>{text}</Button> : null

Index.defaultProps = {
  beers: [],
}

Index.getInitialProps = async ctx => {
  try {
    const { data } = await getRandomBeersBypage()
    return { ...data }
  } catch (error) {
    console.log('error', error)
    return {
      error: error.message,
    }
  }
}

export default asPage(Index)
