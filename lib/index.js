import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from 'styled-components'
import { StoreContext } from 'react-use-redux'
import Layout from 'components/layout'
import defaultTheme from 'theme'
import defaultStore from 'store'
import NProgress from 'next-nprogress/component'

export const asPage = Component => {
  const AsPage = ({ theme = defaultTheme, store = defaultStore, ...rest }) => {
    return (
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={defaultStore}>
          <Layout>
            <NProgress
              color="#29d"
              options={{ trickleSpeed: 50 }}
              showAfterMs={300}
              spinner
            />
            <Component {...rest} />
          </Layout>
        </StoreContext.Provider>
      </ThemeProvider>
    )
  }

  hoistNonReactStatics(AsPage, Component)

  AsPage.getInitialProps = async ctx => {
    if (Component.getInitialProps) {
      const newCtx = {
        ...ctx,
        ...defaultStore,
      }

      const initialProps = await Component.getInitialProps(newCtx)
      return initialProps
    }

    return {}
  }
  return AsPage
}
