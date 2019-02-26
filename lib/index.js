import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import { ThemeProvider } from 'styled-components'
import { StoreContext } from 'react-use-redux'
import Layout from 'components/layout'
import defaultTheme from 'theme'
import defaultStore from 'store'

export const asPage = Component => {
  const AsPage = ({ theme = defaultTheme, store = defaultStore, ...rest }) => {
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <StoreContext.Provider value={store}>
            <Component {...rest} />
          </StoreContext.Provider>
        </Layout>
      </ThemeProvider>
    )
  }

  hoistNonReactStatics(AsPage, Component)
  return AsPage
}
