import * as actionTypes from './actionTypes';

const saveResult = (value) => {
  return {
    type: actionTypes.STORE_RESULT,
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
    type: actionTypes.REMOVE_RESULT,
    id: id,
  };
};