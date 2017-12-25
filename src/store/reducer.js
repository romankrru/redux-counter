import uuidv4 from 'uuid/v4';

import * as actionTypes from './actions/actions';

const initialState = {
  counter: 12,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,        
        counter: state.counter -1
      };
    case actionTypes.ADD:
      return {
        ...state,        
        counter: state.counter + action.value
      };
    case actionTypes.SUBSTRACT:
      return {
        ...state,        
        counter: state.counter - action.value
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          value: state.counter,
          id: uuidv4(),
        })        
      }
    case actionTypes.REMOVE_RESULT:
      const updatedResults = state.results.filter(el =>  el.id !== action.id);
    
      return {
        ...state,
        results: updatedResults,
      }
    default: 
      return state;
  }
};

export default reducer;