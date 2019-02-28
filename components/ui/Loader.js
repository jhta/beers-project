import React, { Fragment } from 'react'
import { Box, Flex } from 'rebass'
import styled from 'styled-components'

const RelativeBox = styled(Flex)`
  position: relative;
  left: -200px;
  top: -90px;
`

const BeerLoader = props => (
  <RelativeBox ml={-4}>
    <div>
      <div id="glass">
        <div id="beer" />
      </div>
      <div id="poignet" />
      <div id="mousse_1" />
      <div id="mousse_2" />
      <div id="mousse_3" />
      <div id="mousse_4" />
      <div id="mousse_5" />
      <div id="mousse_volante" />
      <div id="mousse_interieur" />
      <div id="mousse_interieur_2" />
      <div id="mousse_interieur_3" />
      <div id="mousse_interieur_4" />
    </div>
    <p id="beer_text">LOADING LOVE...</p>
  </RelativeBox>
)

export default BeerLoader
