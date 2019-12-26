import {combineReducers} from 'redux'
import EventReducer from './EventReducer'
import ProductReducer from './ProductReducer'
import OrderReducer from './OrderReducer'
export default combineReducers({OrderReducer, EventReducer, ProductReducer})