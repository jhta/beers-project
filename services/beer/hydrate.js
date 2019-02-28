import { get, pick } from 'lodash'
import timeAgo from 'time-ago'

const DEFAULT_BEER_LOGO =
  'https://cdn.shopify.com/s/files/1/2785/6868/products/40819_12944a9f-24ae-4929-929e-563dad2198d6_x700.jpg?v=1525292781'

export const hydrateBeer = (beer = {}, fullDescription) => {
  const pickedData = pick(beer, [
    'id',
    'nameDisplay',
    'description',
    'createDate',
    'labels',
  ])

  const { description = '' } = pickedData

  const newDescription =
    description.length > 220 && !fullDescription
      ? description.substring(0, 218) + '...'
      : description

  return {
    ...pickedData,
    description: newDescription,
    timeAgo: `created at ${timeAgo.ago(pickedData.createDate)}`,
    logo: get(pickedData, 'labels.medium', DEFAULT_BEER_LOGO),
  }
}

export const hydrateBeers = (beers = []) => beers.map(hydrateBeer)

export const hydrateBeerStyle = (style = {}) => ({
  category: get(style, 'category.name', ''),
  ...pick(style, ['description', 'name', 'id']),
})

export const hydrateDetailBeer = (beer = {}) => {
  console.log('inside the hydrate', beer)
  const basicParams = hydrateBeer(beer, true)
  const detailParams = pick(beer, ['isOrganic', 'style'])

  return {
    ...basicParams,
    ...detailParams,
    isOrganic: detailParams.isOrganic === 'Y',
    style: hydrateBeerStyle(detailParams.style),
  }
}
