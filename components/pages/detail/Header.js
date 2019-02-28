import React from 'react'
import { Box, Heading, Flex, Image } from 'rebass'
import styled from 'styled-components'

import Container from 'ui/Container'

const DetailHeader = props => {
  const image = getRandomBgImage()
  return (
    <DetailHeaderWrapper px={[3]} py={[4]} image={image}>
      <Container>
        <Flex flexDirection="column">
          <StyledImage pb={[3]} width={220} height={200} src={props.logo} />
          <Heading bg="dark" p={[3]} pb={[1]} alignSelf="flex-start">
            {props.nameDisplay}
          </Heading>
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
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const getRandomBgImage = () => {
  const images = [
    'https://images.unsplash.com/photo-1530887534856-8904b1eaf186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1549449943-36943e56b88b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2740&q=80',
    'https://images.unsplash.com/photo-1512487946707-49b92e752d88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1513189737554-b1bbd839b9a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
  ]

  return images[getRandomInt(images.length)]
}

const StyledImage = styled(Image)`
  min-width: 220px;
`
export default DetailHeader
