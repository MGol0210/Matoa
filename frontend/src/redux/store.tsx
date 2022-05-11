import { productsApi } from "../features/productsApi";
import { configureStore } from '@reduxjs/toolkit';

import productsReducer, { productsFetch } from "../features/productsSlice";
import cartReducer from "../features/cartSlice";
import authReducer from "../features/authSlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer,
		auth: authReducer,	
		[productsApi.reducerPath] : productsApi.reducer,
	},

	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

export type RootState = ReturnType<typeof store.getState>;

export default store;