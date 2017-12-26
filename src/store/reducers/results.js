import uuidv4 from 'uuid/v4';

import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  results: []
};

const removeResult = (state, action) => {
  const updatedResults = state.results.filter(el => el.id !== action.id);
  return updateObject(state, { results: updatedResults });
}

const storeResult = (state, action) => {
  return {
    ...state,
    results: state.results.concat({
      value: action.value,
      id: uuidv4(),
    })
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return storeResult(state, action);
    case actionTypes.REMOVE_RESULT:
      return removeResult(state, action);
    default:
      return state;
  }
};

export default reducer;