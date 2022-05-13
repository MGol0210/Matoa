import React from "react"
import { BrowserRouter, 
	Route, 
	Routes,
  LinkProps,
  useResolvedPath,
  useMatch,
  Link,
} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Home from "./Screen/Home"
import Detail from './Screen/DetailProduct';
import Checkout from './Screen/Checkout';

import Payment from './Screen/Checkout/Payment';
import DetailOrder from './Screen/Checkout/DetailOrder';
import Confirm from './Screen/Checkout/Confirmation';

import Register from './Screen/auth/Register';
import Login from './Screen/auth/Login';

interface Props {}

const AppRoutes = (props: Props) => {
	return (
		<BrowserRouter>
      <ToastContainer/>
			<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/detail" element={<Detail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
			<Route path="/checkout" element={<Checkout to={""} />}>
				<Route index element={<DetailOrder />} />
				<Route path="/checkout/payment" element={<Payment />} />
				<Route path="/checkout/confirm" element={<Confirm />} />
			</Route>
		</Routes>
		</BrowserRouter>
		
	)
}

export function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div className="checkout">
      <Link
        style={{
          color: match ? "#d84727" : "#999999",
          textDecoration: "none",
          fontFamily: "Taviraj",
					fontWeight: 500,
					fontSize: 20,
					lineHeight: 2,
        }}
        to={to}
      >
        {children}
      </Link>
    </div>
  );
}

export default AppRoutes
