import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import rootReducer from "./reducers";
import { productsApi } from "./products/apiSlice";

// const store = configureStore({
//   reducer: rootReducer,
// });

const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export { store };
