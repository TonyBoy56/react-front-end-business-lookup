import * as c from './ActionTypes';


// api calls to get all businesses in db
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

// api call to get random business

export const requestRandom = () => ({
  type: c.REQUEST_RANDOM
});

export const getRandomSuccess = (randomBusiness) => ({
  type: c.GET_RANDOM_SUCCESS,
  randomBusiness
});

export const getRandomFailure = (error) => ({
  type: c.GET_RANDOM_FAILURE,
  error
})

export const randomApiCall = () => {
  return dispatch => {
    dispatch(requestRandom);
    return fetch(`http://localhost:3000/businesses/random`)
      .then(response => response.json())
      .then(
        (jsonifiedResponse) => {
          dispatch(getRandomSuccess(jsonifiedResponse));
        })
      .catch((error) => {
          dispatch(getRandomFailure(error));
      });   
  } 
}