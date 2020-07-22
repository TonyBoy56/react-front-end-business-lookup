import businessListReducer from './businesslist-reducer';
import randomReducer from './random-reducer';

import { combineReducers } from 'redux';


const rootReducer = combineReducers({
  businessList: businessListReducer,
  randomBusiness: randomReducer
});


export default rootReducer;