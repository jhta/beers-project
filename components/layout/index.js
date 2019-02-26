import React, { Fragment } from 'react'
import { Box } from 'rebass'
import Head from 'next/head'

import { GlobalStyles } from 'theme/global'

const Layout = props => (
  <Fragment>
    <Head>
      <title>Nice beers</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css?family=Nanum+Gothic"
        rel="stylesheet"
      />
    </Head>

    <GlobalStyles />
    <Box>{props.children}</Box>
  </Fragment>
)

export default Layout
