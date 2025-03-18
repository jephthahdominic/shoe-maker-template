import { createStore } from "redux";
import CartReducer from "./features/shoppingCart/CartSlice";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    cart: CartReducer
})
const store = createStore(rootReducer);

export default store