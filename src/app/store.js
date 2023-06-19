import { configureStore } from "@reduxjs/toolkit";
import businessReducer from "./reducers/business/businessSlice";

export default configureStore({
  reducer:{
    business: businessReducer
  }
})