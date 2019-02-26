import { get, pick } from 'lodash'
import timeAgo from 'time-ago'

const DEFAULT_BEER_LOGO =
  'https://cdn.shopify.com/s/files/1/2785/6868/products/40819_12944a9f-24ae-4929-929e-563dad2198d6_x700.jpg?v=1525292781'

export const hydrateBeer = beer => {
  const pickedData = pick(beer, [
    'id',
    'nameDisplay',
    'description',
    'createDate',
    'labels',
  ])
  return {
    ...pickedData,
    timeAgo: `created at ${timeAgo.ago(pickedData.createDate)}`,
    logo: get(pickedData, 'labels.medium', DEFAULT_BEER_LOGO),
  }
}

export const hydrateBeers = (beers = []) => beers.map(hydrateBeer)
