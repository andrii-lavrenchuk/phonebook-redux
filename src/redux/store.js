import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./slices/filterSlice";
import { contactsReeducer } from "./slices/sontactSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReeducer,
    filter: filterReducer,
  },
});
