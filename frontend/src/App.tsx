import React from "react"
import AppRoutes from "./Routes"
import {Provider} from 'react-redux';

import store from "./redux/store";

function App() {
	return (
		<Provider store={store}>
			<AppRoutes />
		</Provider>
	)
}

export default App
