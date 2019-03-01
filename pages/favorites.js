import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { createUseConnect } from 'react-use-redux'
import { Box, Flex, Heading } from 'rebass'
import { isEmpty } from 'lodash'
import Fade from 'react-reveal/Fade'

import Button from 'ui/Button'
import BeerList from 'components/pages/default/BeerList'
import BeerLoader from 'ui/Loader'
import { getRandomBeersBypage } from 'services/beer'

import EmptyState from 'components/pages/favorites/EmptyState'
import LoadingState from 'components/pages/favorites/LoadingState'

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
  requestFavorites: () => dispatch(beersActions.requestFavorites()),
})

const mapStateToProps = state => ({
  favorites: beersSelectors.getFavorites(state),
  isLoading: beersSelectors.isFetchingFavorites(state),
})

const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

/**
 *
 * Main
 */
const Index = props => {
  // data from store
  const { favorites, requestFavorites, isLoading } = useConnect()

  useEffect(() => {
    requestFavorites()
  }, [])

  return (
    <Box width={[1]} color="black" p={[1]} pt={[5]}>
      <Fade ssrReveal>
        <EmptyStateIfNeeded favorites={favorites} />
        <LoadingStateIfNeeded isLoading={isLoading} />
        <BeerList beers={favorites} />
      </Fade>
    </Box>
  )
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

const LoadingStateIfNeeded = ({ isLoading, ...rest }) =>
  isLoading ? <LoadingState {...rest} /> : null

const EmptyStateIfNeeded = ({ favorites = [], ...rest }) =>
  isEmpty(favorites) ? <EmptyState {...rest} /> : null
