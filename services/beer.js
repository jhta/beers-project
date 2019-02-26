import axios from 'axios'
import { get, pick } from 'lodash'
import qs from 'query-string'
import timeAgo from 'time-ago'

import config from 'config'

const DEFAULT_BEER_LOGO =
  'https://cdn.shopify.com/s/files/1/2785/6868/products/40819_12944a9f-24ae-4929-929e-563dad2198d6_x700.jpg?v=1525292781'

const defaultQuery = {
  key: config.apiKey,
}

const instance = axios.create({
  baseURL: config.apiURL,
  timeout: 1000,
})

const hydrateBeer = beer => {
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

const hydrateBeers = (beers = []) => beers.map(hydrateBeer)

export const getRandomBeersBypage = async (page = 1, randomCount = 10) => {
  const query = {
    page,
    randomCount,
    order: 'random',
    ...defaultQuery,
  }
  try {
    const response = await instance.get(`beers/?${qs.stringify(query)}`)
    const responseData = get(response, 'data', {})

    const data = {
      beers: hydrateBeers(responseData.data),
      page: responseData.currentPage,
      numberOfPages: responseData.numberOfPages,
    }

    return { data, error: null }
  } catch (error) {
    console.log('error')
    return {
      data: null,
      error: error,
    }
  }

  return data
}

export default instance
