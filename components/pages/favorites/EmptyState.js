import React from 'react'
import { Flex, Heading } from 'rebass'

import Button from 'ui/Button'

const EmptyState = props => (
  <Flex
    width={[1]}
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
  >
    <Heading fontFamily="futura">
      You don't favorites beers yet. Boring!!
    </Heading>
    <a href="/">
      <Button big mt={[5]}>
        LET'S GET TO ADD FAVORITES
      </Button>
    </a>
  </Flex>
)

export default EmptyState
