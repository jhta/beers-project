import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createUseConnect } from 'react-use-redux'
import { Box, Flex } from 'rebass'
import { isEmpty } from 'lodash'
import Fade from 'react-reveal/Fade'

import Button from 'ui/Button'
import BeerList from 'components/pages/default/BeerList'
import BeerLoader from 'ui/Loader'
import { getRandomBeersBypage } from 'services/beer'

import { asPage } from 'lib'
import {
  actions as beersActions,
  selectors as beersSelectors,
} from 'reducers/beers'

/**
 *
 * Redux Connect
 */
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

const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

/**
 *
 * Main
 */
const Index = props => {
  // data from store
  const {
    beers,
    setInitialStoreFromServer,
    fetchBeers,
    page,
    isLoading,
  } = useConnect()
  const { numberOfPages } = props

  // useEffect used as componentDidMount
  useEffect(() => {
    setInitialStoreFromServer({
      beers: props.beers,
      page: props.page,
      numberOfPages,
    })
  }, [])

  const newBeers = !isEmpty(beers) ? beers : props.beers

  // handler for click on 'Get more beers'
  const fetchBeersHandler = () => fetchBeers(page)

  return (
    <Box width={[1]} color="black" p={[1]} pt={[5]}>
      <Fade ssrReveal>
        <BeerList beers={newBeers} />
        <Flex p={[4]} justifyContent="center">
          <LoaderIfNeeded isLoading={isLoading} />
          <ButtonGetMoreIfNeeded
            isLoading={isLoading}
            big
            onClick={fetchBeersHandler}
            text={'GET MORE BEERS!'}
          />
        </Flex>
      </Fade>
    </Box>
  )
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

Index.defaultProps = {
  beers: [],
}

Index.propTypes = {
  beers: PropTypes.array,
}

export default asPage(Index)

/**
 * Private components
 */

const LoaderIfNeeded = ({ isLoading, ...rest }) =>
  isLoading ? <BeerLoader {...rest} /> : null

const ButtonGetMoreIfNeeded = ({ isLoading, text, ...rest }) =>
  !isLoading ? <Button {...rest}>{text}</Button> : null
