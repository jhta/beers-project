import { mountSelectors } from 'lib/mountSelectors'

export const baseSelectors = {
  getBeers: state => state.beers,
  isFetchingBeers: state => state.isFetchingBeers,
  getFavorites: state => state.favorites,
  isFetchingFavorites: state => state.isFetchingFavorites,
  favoriteIds: state => state.favoriteIds,
}

export const selectors = mountSelectors(state => state.beers, baseSelectors)
