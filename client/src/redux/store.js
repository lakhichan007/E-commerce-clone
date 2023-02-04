import { createStore,applyMiddleware } from 'redux'
import rooReducer from './reducers'
import thunk from "redux-thunk"
const store = createStore()