import axios from 'axios';
import * as types from "./actionTypes";

const vehicleApi = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json';



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
        dispatch({ type: types.FETCH_SMURF_SUCCESS, payload: res.data.results })
      )
      .catch(err => dispatch({ type: types.FETCH_SMURF_FAIL, payload: err }));
  };