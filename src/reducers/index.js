import actionTypes from '../actions/actionTypes'

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

    default:
      return state;
  }
};

export default rootReducer;
