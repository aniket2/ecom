import { combineReducers } from 'redux';
import userReducer from './user/user-reducer.js';
import cartReducer from './cart/cart.reducers.js';

export default combineReducers ({
	user: userReducer,
	cart: cartReducer
});