import * as c from './ActionTypes';

export const requestBusinessList = () => ({
  type: c.REQUEST_BUSINESSLIST
});

export const getBusinessListSuccess = (businessList) => ({
  type: c.GET_BUSINESSLIST_SUCCESS,
  businessList
});

export const getBusinessListFailure = (error) => ({
  type: c.GET_BUSINESSLIST_FAILURE,
  error
});

export const makeApiCall = () => {
  return dispatch => {
    dispatch(requestBusinessList);
    return fetch(`http://localhost:3000/`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getBusinessListSuccess(jsonifiedResponse));
        })
      .catch((error) => {
          dispatch(getBusinessListFailure(error));
      });   
  } 
}