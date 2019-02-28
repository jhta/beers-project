import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, Heading, Text, Flex, Image } from 'rebass'
import styled from 'styled-components'

import Button from 'ui/Button'

const BeerCard = React.memo(
  ({ nameDisplay, createDate, description, logo, timeAgo }) => (
    <Card border={1} borderColor={'white'}>
      <Flex>
        <Card width={220} borderiRight={1} bg="#ccc">
          <StyledImage width={220} height={200} src={logo} />
        </Card>
        <Box p={[3]} pl={[4]}>
          <Heading pb={[2]}>{nameDisplay}</Heading>
          <Text color="white" pb={[2]}>
            {timeAgo}
          </Text>
          <Text color="white">{description}</Text>
          <Box pt={[2]}>
            <Button>{'MORE DETAILS'}</Button>
          </Box>
        </Box>
      </Flex>
    </Card>
  )
)

BeerCard.propTypes = {
  nameDisplay: PropTypes.string.isRequired,
  createDate: PropTypes.string.isRequired,
  description: PropTypes.string,
  logo: PropTypes.string,
}

BeerCard.displayName = 'BeerCard'

export default BeerCard

/**
 * Private components
 */

const StyledImage = styled(Image)`
  min-width: 220px;
`
