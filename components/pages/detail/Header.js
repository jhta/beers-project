import React from 'react'
import { Box, Heading, Flex, Image, Text, Card } from 'rebass'
import styled from 'styled-components'
import { getRandomBgImage } from 'lib/getRandomBeerImage'

import Container from 'ui/Container'
import Button, { SolidButton } from 'ui/Button'

const image = getRandomBgImage()

const DetailHeader = ({ nameDisplay, logo, ...favoritesProps }) => {
  return (
    <DetailHeaderWrapper px={[3]} py={[4]} image={image}>
      <Container>
        <Flex width={1} justifyContent="space-between" alignItems="flex-end">
          <Flex flexDirection="column">
            <StyledImage pb={[3]} width={220} height={200} src={logo} />
            <Heading bg="dark" p={[3]} pb={[1]} alignSelf="flex-start">
              {nameDisplay}
            </Heading>
          </Flex>
          <BoxMessageIfNeeded {...favoritesProps} />
          <ButtonFavorites {...favoritesProps} />
        </Flex>
      </Container>
    </DetailHeaderWrapper>
  )
}

const DetailHeaderWrapper = styled(Box)`
  display: flex;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  left: 0;
  top: 65px;
  min-height: 400px;
  background-position: center !important;
  background: url('${props => props.image}');
  background-size: cover;
`

DetailHeaderWrapper.displayName = 'DetailHeaderWrapper'

export default React.memo(DetailHeader)

const StyledImage = styled(Image)`
  min-width: 220px;
`

const BoxMessageIfNeeded = ({ canAddToFavorites, isFavorite }) =>
  !canAddToFavorites && !isFavorite ? (
    <Card p={[3]} border={[1]} borderColor="white">
      <Text>You already full the limit (10 favorites)</Text>
    </Card>
  ) : null

const ButtonFavorites = ({
  isFavorite,
  addToFavorites,
  removeFromFavorites,
  beer,
  canAddToFavorites,
}) =>
  !canAddToFavorites && !isFavorite ? null : !isFavorite ? (
    <SolidButton
      onClick={() => {
        addToFavorites(beer)
      }}
    >
      ADD TO FAVORITES
    </SolidButton>
  ) : (
    <SolidButton
      onClick={() => {
        removeFromFavorites(beer)
      }}
    >
      REMOVE FROM FAVORITES
    </SolidButton>
  )
