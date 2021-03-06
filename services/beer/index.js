import axios from 'axios'
import { get } from 'lodash'
import qs from 'query-string'

import config from 'config'

import { hydrateBeers, hydrateDetailBeer } from './hydrate'
import favoritesStorage from 'services/beer/favoritesStorage'

const defaultQuery = {
  key: config.apiKey,
}

const instance = axios.create({
  baseURL: config.apiURL,
  timeout: 5000,
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
      error: error.messagge,
    }
  }

  return data
}

export const getBeerById = async (id = null) => {
  if (!id) return { error: 'Empty ID' }

  try {
    const response = await instance.get(
      `beer/${id}/?${qs.stringify(defaultQuery)}`
    )
    const responseData = get(response, 'data.data', {})

    const res = { data: hydrateDetailBeer(responseData), error: null }
    return res
  } catch (error) {
    console.log(error.message)
    return { data: null, error: error.message }
  }
}

export const addBeerToFavorites = async (beer = {}) => {
  try {
    const response = favoritesStorage.set(beer.id, beer)
    return { data: response, error: null }
  } catch (error) {
    console.log(error)
    return error
  }
}

export const getFavorites = async () => {
  try {
    const response = favoritesStorage.getAll()
    return { data: response, error: null }
  } catch (error) {
    console.log(error)
    return error
  }
}

export const removeBeerFromFavorites = async (beer = {}) => {
  try {
    favoritesStorage.remove(beer.id)
    const data = favoritesStorage.getAll()
    return { data, error: null }
  } catch (error) {
    console.log(error)
    return error
  }
}

export default instance
