import { combineReducers } from "redux";
import currencyReducer from "./CurrencyReducer";


const rootReducer = combineReducers({
    currency: currencyReducer,
  });
  
  export default rootReducer;