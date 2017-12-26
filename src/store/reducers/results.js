import uuidv4 from 'uuid/v4';

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          value: action.value,
          id: uuidv4(),
        })
      }
    case actionTypes.REMOVE_RESULT:
      const updatedResults = state.results.filter(el => el.id !== action.id);

      return {
        ...state,
        results: updatedResults,
      }
    default:
      return state;
  }
};

export default reducer;