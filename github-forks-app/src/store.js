import { createStore, applyMiddleware, compose } from 'redux';
//import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';

export const history = createHistory();



const initialState = {};
const enhancers = [];
const middleware = [
    thunk
];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
    
    if (typeof devToolsExtension === 'function') enhancers.push(devToolsExtension());
}

const composeEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers
);

export default store;