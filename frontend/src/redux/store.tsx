import productsReducer, { productsFetch } from "../features/productsSlice";
import { productsApi } from "../features/productsApi";
import cartReducer from "../features/cartSlice";
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {
		products: productsReducer,
		cart: cartReducer ,
		[productsApi.reducerPath] : productsApi.reducer,
	},

	middleware: (getDefaultMiddleware) => 
		getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

export type RootState = ReturnType<typeof store.getState>;

export default store;