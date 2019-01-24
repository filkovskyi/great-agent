import actionTypes from '../actions/actionTypes'
import {sortBy} from 'lodash';

const defaultState = {
  propertyCache: [],
  property: []
};

const rootReducer = (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.ADD_PROPERTY:
      const newProperty = action.payload;
      let property = [];
      let propertyCache = [...state.propertyCache, newProperty];
      return Object.assign({}, state, {
        property,
        propertyCache
      });
    case actionTypes.SORT_BY:
      console.log(sortBy(state.propertyCache, [action.payload]))
      return Object.assign({}, state, {
        propertyCache: sortBy(state.propertyCache, [action.payload])
      });
    default:
      return state;
  }
};

export default rootReducer;
