import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  randomBusiness: {},
  businessList:[],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_RANDOM:
      return Object.assign({}, state, {
        isLoading:true
      });
    case c.GET_RANDOM_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        randomBusiness: action.randomBusiness
      });
    case c.GET_RANDOM_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
    default:
      return state;
  }
}