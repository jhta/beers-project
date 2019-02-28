import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from 'styled-components'
import { StoreContext } from 'react-use-redux'
import defaultTheme from 'theme'
import defaultStore from 'store'

export const asPage = ComponentToEnhance => {
  const AsPage = ({ theme = defaultTheme, store = defaultStore, ...rest }) => {
    return (
      <ThemeProvider theme={theme}>
        <StoreContext.Provider value={store}>
          <ComponentToEnhance {...rest} />
        </StoreContext.Provider>
      </ThemeProvider>
    )
  }

  hoistNonReactStatics(AsPage, ComponentToEnhance)

  AsPage.getInitialProps = async ctx => {
    if (ComponentToEnhance.getInitialProps) {
      const newCtx = {
        ...ctx,
        ...defaultStore,
      }
      console.log('my default store', defaultStore)
      const initialProps = await ComponentToEnhace.getInitialProps(newCtx)
      return initialProps
    }

    return {}
  }
  return AsPage
}
