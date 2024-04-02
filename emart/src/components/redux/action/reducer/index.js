import { createStore, combineReducers } from "redux";
import handleCart from "./handleCart";

const rootReducers = combineReducers({
    handleCart,
});

export const store = createStore(rootReducers); // Assuming you want to create a Redux store

export default rootReducers;