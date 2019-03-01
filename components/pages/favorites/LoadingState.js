import React from 'react'
import { Flex } from 'rebass'

import BeerLoader from 'ui/Loader'

const LoadingState = props => (
  <Flex
    width={[1]}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <BeerLoader message="LOADING YOUR FAVORITES..." />
  </Flex>
)

export default LoadingState
