import React from "react";
import { CheckWrapper } from "./styles";
import { DefaultLayout } from "../../Components/Layout/Default";


import images from "../../assets/Images";

import { 
  LinkProps, 
  Outlet,
  useResolvedPath,
  useMatch, } from "react-router-dom";
import { CustomLink } from '../../Routes';

export function Checkout({ to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return(
    <DefaultLayout>
      <CheckWrapper>
        <CustomLink to=''>
          <div className="checkout-img" >
            {match ?
              <img src={images.Icon_Checkout_On} alt='img'/>
            :
              <img src={images.Icon_Checkout_Off} alt='img'/>
            }
          </div>
          <p className="checkout-name">1. Checkout</p>
        </CustomLink>
        <div className="separation"></div>
        <CustomLink className="checkout" to='payment'>
          <div className="checkout-img" >
            {match ?
              <img src={images.Icon_Payment_On} alt='img'/>
            :
              <img src={images.Icon_Payment_Off} alt='img'/>
            }
          </div>
          <p className="checkout-name">2. Payment</p>
        </CustomLink>
        <div className="separation"></div>
        <CustomLink className="checkout" to='confirm'>
          <div className="checkout-img" >
            {match ?
              <img src={images.Icon_Confirm_On} alt='img'/>
            :
              <img src={images.Icon_Confirm_Off} alt='img'/>
            }
          </div>
          <p className="checkout-name">3. Confirmation</p>
        </CustomLink>
      </CheckWrapper>
      <div className="maint-content">
        <Outlet />
      </div>
    </DefaultLayout>
  )
}

export default Checkout;