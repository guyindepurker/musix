import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { mixReducer } from './reducers/MixReducer';
// import { userReducer } from './reducers/UserReducer';
// import { playerReducer } from './reducers/PlayerReducer';


const rootReducer = combineReducers({
  mixReducer

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
