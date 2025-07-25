import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducers';
import { productReducer } from './products/products.reducers';

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer,
});
