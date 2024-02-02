import {configureStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import taskReducer from './reducers/taskReducer';


const store =  configureStore(
     taskReducer,
     composeWithDevTools(applyMiddleware(thunk))

)

export default store