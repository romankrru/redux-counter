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
          id: new Date(),
        })        
      }
    default: 
      return state;
  }
};

export default reducer;