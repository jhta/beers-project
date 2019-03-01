import React from 'react'
import { Flex, Box, Heading } from 'rebass'

const Header = props => (
  <Flex
    my={-2}
    width={1}
    mb={[4]}
    zIndex={1000}
    justifyCOntent="space-between"
    bg="dark"
  >
    <Box width={[1]} border={1} p={3} borderColor="white">
      <a href="/" style={{ textDecoration: 'none' }}>
        <Heading bg="dark" fontFamily="futura">
          AWESOME BEERS
        </Heading>
      </a>
    </Box>
    <Box p={3} bg="main">
      <a href="/favorites" style={{ textDecoration: 'none' }}>
        <Heading bg="main" color="black" fontFamily="futura">
          FAVORITES
        </Heading>
      </a>
    </Box>
  </Flex>
)

export default Header
