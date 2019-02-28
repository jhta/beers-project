import React, { useLayoutEffect } from 'react'
import { PropTypes } from 'prop-types'
import { Box, Heading, Text, Flex, Image } from 'rebass'
import styled from 'styled-components'

import { asPage } from 'lib'
import { getBeerById } from 'services/beer'

import DetailHeader from 'components/pages/detail/Header'
import OrganicIco from 'ui/OrganicIco'

const Detail = props => {
  return (
    <Flex width={[1]} css={{}} pt={465} mb={200}>
      <DetailHeader {...props} />
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

Detail.getInitialProps = async ({ query = {} }) => {
  try {
    const { data } = await getBeerById(query.id)
    return { ...data }
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

const OrganicIcoIfNeeded = ({ isOrganic, ...rest }) =>
  isOrganic ? <OrganicIco {...rest} /> : null
