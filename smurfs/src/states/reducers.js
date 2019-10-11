import * as types from "./actionTypes";


const initialValueCount = 0;
export function counterReducer(count = initialValueCount, action) {

  switch (action.type) {
    case types.INCREMENT:
      return count + 1;

    case types.DECREMENT:
      return count - 1;

    case types.RESET:
      return count = 0;

    default:
    return  count;
  }
}



const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
  };
   
  export function reducer(state = initialState, action) {
    // console.log('reducer', action);
    switch (action.type) {
      case types.FETCH_SMURF_START:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case types.FETCH_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        };
      case types.FETCH_SMURF_FAIL:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
