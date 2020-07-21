import * as c from './ActionTypes';

export const requestBusinessList = () => ({
  type: c.REQUEST_BUSINESSLIST
});

export const getBusinessListSuccess = (businessList) => ({
  type: c.GET_BUSINESSLIST_SUCCESS,
  headlines
});

export const getBusinessListFailure = (error) => ({
  type: c.GET_BUSINESSLIST_FAILURE,
  error
});