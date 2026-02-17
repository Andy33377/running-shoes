import { configureStore } from "@reduxjs/toolkit";
import catalogFiltersReducer from "./catalogFiltersSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    catalogFilters: catalogFiltersReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
