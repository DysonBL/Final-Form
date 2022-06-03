

import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { UserReducer } from './UserReducer';

const reducer = combineReducers({
    UserReducer : UserReducer,
  
});
export const Store = createStore(reducer, applyMiddleware(thunk));

