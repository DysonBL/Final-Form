

import { createStore, applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { UserReducer } from './UserReducer';

const reducer = combineReducers({
    UserReducer : UserReducer,
  
});
const middleware = [thunk];
export const Store = createStore(reducer, applyMiddleware(...middleware));
