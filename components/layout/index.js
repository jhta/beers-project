import React, { Fragment } from 'react'
import { Box } from 'rebass'
import Head from 'next/head'

import Header from 'ui/Header'

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
      <style />
    </Head>

    <GlobalStyles />

    <Header />
    <Box width={[1]} css={{ maxWidth: '1080px', margin: '0 auto' }}>
      {props.children}
    </Box>
  </Fragment>
)

export default Layout
