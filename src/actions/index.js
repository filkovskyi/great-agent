import actionTypes from './actionTypes'

export function addProperty(property) {
  return {
    type: actionTypes.ADD_PROPERTY,
    payload: property
  }
}

export function sortBy(propName) {
  return {
    type: actionTypes.SORT_BY,
    payload: propName
  }
}

export function toggleFav(assetId) {
  return {
    type: actionTypes.TOGGLE_FAV,
    payload: assetId
  }
}
