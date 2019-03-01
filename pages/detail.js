import React, { useEffect } from 'react'
import { PropTypes } from 'prop-types'
import { Box, Heading, Text, Flex, Image } from 'rebass'
import styled from 'styled-components'

import { asPage } from 'lib'
import { getBeerById } from 'services/beer'

import DetailHeader from 'components/pages/detail/Header'
import OrganicIco from 'ui/OrganicIco'

import { createUseConnect } from 'react-use-redux'

import {
  actions as beersActions,
  selectors as beersSelectors,
} from 'reducers/beers'

/**
 *
 * Redux
 */
const mapDispatchToProps = dispatch => ({
  addToFavorites: beer => dispatch(beersActions.addFavorite(beer)),
  removeFromFavorites: beer => dispatch(beersActions.removeFavorite(beer)),
  requestFavorites: () => dispatch(beersActions.requestFavorites()),
})

const mapStateToProps = (state, ownProps = {}) => ({
  favoriteIds: beersSelectors.favoriteIds(state),
  canAddToFavorites: beersSelectors.canAddMoreFavorites(state),
})

const useConnect = createUseConnect(mapStateToProps, mapDispatchToProps)

/**
 *  Main
 */
const Detail = props => {
  const {
    favoriteIds = [],
    addToFavorites,
    canAddToFavorites,
    requestFavorites,
    removeFromFavorites,
  } = useConnect()
  const isFavorite = favoriteIds.find(id => id === props.id)

  useEffect(() => {
    requestFavorites()
  }, [])

  return (
    <Flex width={[1]} css={{}} pt={465} mb={200}>
      <DetailHeader
        {...props}
        isFavorite={isFavorite}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
        canAddToFavorites={canAddToFavorites}
      />
      <Flex pt={[1]} flexDirection="column">
        <Flex alignItems="center">
          <OrganicIcoIfNeeded isOrganic={props.isOrganic} mr={[3]} />
          <Box>
            <Text>{props.description}</Text>
          </Box>
        </Flex>
        <Box pt={[4]}>
          <Heading pb={[3]}>Style: {props.style.name}</Heading>
          <Text pb={[3]}>{props.style.description}</Text>
          <Text>Category: {props.style.category}</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

/**
 * Server Actions
 */

Detail.getInitialProps = async ({ query = {} }) => {
  try {
    const { data } = await getBeerById(query.id)
    const beer = data
    return { ...data, beer }
  } catch (error) {
    console.log('error', error)
    return { error }
  }
}

Detail.propTypes = {
  description: PropTypes.string,
  logo: PropTypes.string,
  isOrganic: PropTypes.bool,
  style: PropTypes.shape({
    category: PropTypes.string,
    description: PropTypes.string,
    name: PropTypes.string,
  }),
}

Detail.defaultProps = {
  style: {},
}

export default asPage(Detail)

/**
 * Private components
 */

const OrganicIcoIfNeeded = ({ isOrganic, ...rest }) =>
  isOrganic ? <OrganicIco {...rest} /> : null
