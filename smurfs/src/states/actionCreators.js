import axios from 'axios';
import * as types from "./actionTypes";



export function increment() {
  return {
    type: types.INCREMENT,
  }
}

export function decrement() {
  return {
    type: types.DECREMENT,
  }
}

export function reset() {
  return {
    type: types.RESET,
  }
}


export const getSmurf = () => dispatch => {
  dispatch({ type: types.FETCH_SMURF_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res =>
      // console.log("tttt: ", res)
      dispatch({ type: types.FETCH_SMURF_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: types.FETCH_SMURF_FAIL, payload: err }));
};


export const postSmurf = (newSmurf) => dispatch => {

  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(res =>
      // console.log("tttt: ", res)
      dispatch({ type: types.POST_SMURF_SUCCESS, payload: newSmurf })
    )
    // .catch(err => dispatch({ type: types.POST_SMURF_FAIL, payload: err }));
};

