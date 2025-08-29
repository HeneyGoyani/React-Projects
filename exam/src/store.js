import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./Services/Reducers";


export const store = createStore(rootReducer, applyMiddleware(thunk));
// export default store; 


// import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
// import thunk from "redux-thunk";
// import { rootReducer } from "./Services/Reducers";

// // You could also use Redux DevTools Extension
// import { composeWithDevTools } from "redux-devtools-extension";

// const middleware = [thunk];

// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );



