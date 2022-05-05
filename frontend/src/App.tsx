import React from "react"
import logo from "./logo.svg"
import AppRoutes from "./Routes"

import { configureStore } from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import productsReducer from "./features/productsSlice";

const store = configureStore({
	reducer: {
		products: productsReducer,
	}
});

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	)
}

export default App
