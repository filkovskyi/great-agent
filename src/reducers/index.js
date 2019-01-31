import actionTypes from '../actions/actionTypes'
import {sortBy, filter, forEach} from 'lodash';

const defaultState = {
  propertyCache: [],
  property: []
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PROPERTY:
      const newProperty = action.payload;
      newProperty.isFavorite = false;
      let property = [];
      let propertyCache = [...state.propertyCache, newProperty];
      return Object.assign({}, state, {
        property,
        propertyCache
      });
    case actionTypes.SORT_BY:
      return Object.assign({}, state, {
        propertyCache: sortBy(state.propertyCache, [action.payload])
      });
    case actionTypes.TOGGLE_FAV:
      let filtered = filter(state.propertyCache, ['id', action.payload]);
      let newColection = forEach(filtered, function (proprety) {
        return proprety.isFavorite = true;
      });
      return Object.assign({}, state, {
        propertyCache: newColection
      });
      return state;
    default:
      return state;
  }
};

export default rootReducer;
