import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'rebass'

import BeerCard from 'components/pages/default/BeerCard'

const BeerList = React.memo(({ beers = [] }) => (
  <Box>
    {beers.map((beer, key) => (
      <BeerCard key={key} {...beer} />
    ))}
  </Box>
))

BeerList.displayName = 'BeerList'

BeerList.propTypes = {
  beers: PropTypes.array,
}

export default BeerList
