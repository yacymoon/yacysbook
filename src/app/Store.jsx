import { configureStore } from "@reduxjs/toolkit";
import FilterSlice from "./FilterSlice";

const Store = configureStore({
    reducer: {
        filter: FilterSlice,
    }
});

export default Store;