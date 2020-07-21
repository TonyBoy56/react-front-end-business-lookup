import * as c from './../actions/ActionTypes';

let initialState = {
  isLoading: false,
  businessList: [],
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case c.REQUEST_BUSINESSLIST:
      return Object.assign({}, state, {
        isLoading: true
      });
    case c.GET_BUSINESSLIST_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        businessList: action.businessList
      });
    case c.GET_BUSINESSLIST_FAILURE:
      return Object.assign({}, state, {
        isLoading: false,
        error: action.error
      });
      default:
        return state;
  } 
}