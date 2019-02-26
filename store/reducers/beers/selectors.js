import { mountSelectors } from 'lib/mountSelectors'

export const baseSelectors = {
  getBeers: state => state.beers,
  isFetchingBeers: state => state.isFetchingBeers,
}

export const selectors = mountSelectors(state => state.beers, baseSelectors)
