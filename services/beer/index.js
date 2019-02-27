import axios from 'axios'
import { get } from 'lodash'
import qs from 'query-string'

import config from 'config'

import { hydrateBeers } from './hydrate'

const defaultQuery = {
  key: config.apiKey,
}

const instance = axios.create({
  baseURL: config.apiURL,
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
})

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
