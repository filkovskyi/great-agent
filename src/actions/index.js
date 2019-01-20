import actionTypes from './actionTypes'

export function addProperty(property) {
  return {
    type: actionTypes.ADD_PROPERTY,
    payload: property
  }
}
