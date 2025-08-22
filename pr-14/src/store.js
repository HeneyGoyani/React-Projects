// import { createStore, applyMiddleware, combineReducers } from "redux";
// import { thunk } from "redux-thunk";
// import { productReducer } from "./Services/Reducers/productReducer";

// const rootReducer = combineReducers({
//   productReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store; 

import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./Services/Reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));