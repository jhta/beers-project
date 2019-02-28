import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from 'ui/Header'
import Container from 'ui/Container'

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
    <Container mt={200}>{props.children}</Container>
  </Fragment>
)

export default Layout
