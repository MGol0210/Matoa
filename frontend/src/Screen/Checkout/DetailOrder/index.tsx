import React from "react";
import { OrderWrapper } from "./styles";

import { Link } from "react-router-dom";

const Order: React.FC = () => {
  return(
    <OrderWrapper>
      <div className="wrapper-top">
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
        <div className="bill-add">
          <p className="title">Billing Address</p>
          <div className="detail">
            <div className="wrapper">
              <p className="title">Fullname</p>
              <input type="text" name="name" className="content" placeholder="Ex: Rasyidin Arsyad Nasution"/>
            </div>
            <div className="wrapper">
              <p className="title">Email Address</p>
              <input type="gmail" name="name" className="content" placeholder="Ex: rasyid.arsyad@gmail.com"/>
            </div>
            <div className="wrapper">
              <p className="title">Phone Number</p>
              <input type="number" name="name" className="content" placeholder="Ex: 089111888999"/>
            </div>
            <div className="wrapper">
              <p className="title">Shipping Address</p>
              <input type="text" name="name" className="content" placeholder="Ex: Patriot Street Number 666, Ngaklik, Sleman"/>
            </div>
            <div className="wrapper">
              <p className="title">Country</p>
              <select className="content" name="cars">
                <option value="volvo" className="option">United State of America (USA)</option>
                <option value="saab" className="option">Saab</option>
                <option value="fiat" className="option">Fiat</option>
                <option value="audi" className="option">Audi</option>
              </select>
            </div>
            <div className="wrapper">
              <p className="title">State/Province</p>
              <select className="content" name="cars">
                <option value="volvo" className="option">California</option>
                <option value="saab" className="option">Saab</option>
                <option value="fiat" className="option">Fiat</option>
                <option value="audi" className="option">Audi</option>
              </select>
            </div>
            <div className="wrapper">
              <div className="wrapper-1">
                <div className="wrapper-2">
                  <p className="title">City</p>
                  <select className="content" name="cars">
                    <option value="volvo" className="option">San Francisco</option>
                    <option value="saab" className="option">Saab</option>
                    <option value="fiat" className="option">Fiat</option>
                    <option value="audi" className="option">Audi</option>
                  </select>
                </div>
                <div className="wrapper-2">
                  <p className="title">Zip Code</p>
                  <input type="text" name="name" className="content" placeholder="Ex: 94024"/>
                </div>
              </div>
            </div>
            <div className="wrapper">
              <p className="title">Choose Courier</p>
              <select className="content" name="cars">
                <option value="volvo" className="option">DHL</option>
                <option value="saab" className="option">Saab</option>
                <option value="fiat" className="option">Fiat</option>
                <option value="audi" className="option">Audi</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wrapper-bottom">
        <div className="btn">
          <button className="btn-continue">
            <p>Continue Shopping</p>
          </button>
          <Link className="btn-my-order" to='payment'>
            <p>Place My Order</p>
          </Link>
        </div>
      </div>
    </OrderWrapper>
  )
}

export default Order;