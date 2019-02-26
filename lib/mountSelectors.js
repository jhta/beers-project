import { mapValues } from 'lodash'
import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect'

/**
 * @function mountSelectors
 *
 * Utility function that takes an object of selectors and re-selects all of them by
 * selecting the mount point first.
 * This allows us to have selectors side by side with their reducers
 * and then assign a mount point for the selectors.
 *
 * For example, a UI selector could operate on the "local" data structure
 * under the "ui" mount point. A selector on "state.isKeyboardVisible" would
 * then ask for "state.ui.isKeyboardVisible".
 *
 * @param {*} mountPointSelector
 * @param {*} selectors
 */
export const mountSelectors = (mountPointSelector, selectors) => {
  return mapValues(selectors, value =>
    createSelector(
      mountPointSelector,
      value
    )
  )
}
