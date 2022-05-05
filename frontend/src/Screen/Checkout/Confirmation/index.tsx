import React from "react";
import { ConfirmWrapper } from "./styles";

import images from "../../../assets/Images";

const Confirm: React.FC = () => {
  return(
    <ConfirmWrapper>
      <div className="wrapper-top">
        <div className="order-confirm">
          <img src={images.Icon_Confirm} alt=''/>
          <div className="wrapper">
            <p className="title">Order Confirmed</p>
            <p className="content">Your order have been confirmed, please wait and track your order</p>
          </div>
          <button>
            <p>Go to track page</p>
          </button>
        </div>
        
        <div className="detail-order">
          <p className="title">Detail Order</p>
          <div className="detail">
            <div className="wrapper">
              <p className="title">Subtotal</p>
              <p className="content">Rp 2.152.000</p>
            </div>
            <div className="wrapper">
              <p className="title">Shipping Cost</p>
              <p className="content">500.000</p>
            </div>
            <div className="wrapper">
              <p className="title">Promo Code</p>
              <p className="content">INDONESIA</p>
            </div>
            <div className="wrapper">
              <p className="title">Packaging</p>
              <p className="content">Rp 50.000</p>
            </div>
          </div>
          <div className="total">
            <div className="wrapper">
              <p className="title">Grand Total</p>
              <p className="content">Rp 2.702.000</p>
            </div>
          </div>
        </div>
      </div>
    </ConfirmWrapper>
  )
}

export default Confirm;