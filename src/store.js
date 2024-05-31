import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { devToolsEnhancer } from "redux-devtools-extension/logOnlyInProduction";

import accountReducer from "./features/account/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  devToolsEnhancer(applyMiddleware(thunk))
);

export default store;
