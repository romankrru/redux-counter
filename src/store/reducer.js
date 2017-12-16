import uuidv4 from 'uuid/v4';

const initialState = {
  counter: 12,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      };
    case 'DECREMENT':
      return {
        ...state,        
        counter: state.counter -1
      };
    case 'ADD':
      return {
        ...state,        
        counter: state.counter + action.value
      };
    case 'SUBSTRACT':
      return {
        ...state,        
        counter: state.counter - action.value
      };
    case 'STORE_RESULT':
      return {
        ...state,
        results: state.results.concat({
          value: state.counter,
          id: uuidv4(),
        })        
      }
    default: 
      return state;
  }
};

export default reducer;