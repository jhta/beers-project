const isBrowser = typeof window === 'object'

/**
 * Manipulate the favorites as Map and persits it
 * on the localstorage
 */
const createFavoritesStorage = () => {
  if (!isBrowser) {
    return {}
  }

  const storage = window.localStorage

  const baseMap = storage.getItem('favorites')

  const favoritesMap = baseMap ? new Map(JSON.parse(baseMap)) : new Map()

  const set = (key, value) => {
    favoritesMap.set(key, value)
    // parse the map to string for save the changes
    const favoritesMapAsString = JSON.stringify(
      Array.from(favoritesMap.entries())
    )
    storage.setItem('favorites', favoritesMapAsString)
    return { key, value }
  }

  const get = key => favoritesMap.get(key)

  const has = key => favoritesMap.has(key)

  // get 2 arrays, the first one the favorites,
  // the second one a favorites id array for manipulate the
  // finding options
  const getAll = () => ({
    favorites: Array.from(favoritesMap.values()),
    favoriteIds: Array.from(favoritesMap.keys()),
  })

  return {
    set,
    get,
    has,
    getAll,
  }
}

const favoritesStorage = createFavoritesStorage()

export default favoritesStorage
