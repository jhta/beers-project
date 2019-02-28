import React from 'react'
import { Box } from 'rebass'

const Container = props => (
  <Box
    p={[1, 0]}
    width={[1]}
    css={{ maxWidth: '1080px', margin: '0 auto' }}
    {...props}
  >
    {props.children}
  </Box>
)

export default Container
