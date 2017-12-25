export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const REMOVE_RESULT = 'REMOVE_RESULT';

export const increment = () => {
  return {
    type: INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: DECREMENT,
  };
};

export const add = (value) => {
  return {
    type: ADD,
    value: value,
  };
};

export const subtract = (value) => {
  return {
    type: SUBTRACT,
    value: value,
  };
};

const saveResult = (value) => {
  return {
    type: STORE_RESULT,
    value: value
  };
}

export const storeResult = (result) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 1000);
  }
};

export const removeResult = (id) => {
  return {
    type: REMOVE_RESULT,
    id: id,
  };
};