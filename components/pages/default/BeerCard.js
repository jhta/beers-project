import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, Heading, Text, Flex, Image } from 'rebass'
import styled from 'styled-components'

const BeerCard = React.memo(
  ({ nameDisplay, createDate, description, logo, timeAgo }) => (
    <Card border={1}>
      <Flex>
        <Card width={220} border={1}>
          <StyledImage width={220} height={200} src={logo} />
        </Card>
        <Box p={[3]}>
          <Heading pb={[2]}>{nameDisplay}</Heading>
          <Text pb={[2]}>{timeAgo}</Text>
          <Text>{description}</Text>
        </Box>
      </Flex>
    </Card>
  )
)

BeerCard.PropTypes = {
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
