import { FormLabel, Radio } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import RadioGroup from "@mui/material/RadioGroup";
import React from "react";
import { PaymentWrapper } from "./styles";

import images from "../../../assets/Images";

const Payment: React.FC = () => {
  return(
    <PaymentWrapper>
      <div className="wrapper-top">
        <div className="detail-order-left">
          <div className="order">
            <p className="title">Detail Order</p>
            <div className="detail-left">
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

          <div className="payment">
            <div className="payment-top">
              <p className="title">Payment Detail</p>
              <p className="time">11:55:55</p>
            </div>
            <div className="payment-bottom">
              <p className="content">Please make a payment according with the limit time specified, starting from now</p>
            </div>
          </div>
        </div>

        <div className="detail-order-right">
          <p className="title">Detail Order</p>
          <div className="detail-right">
            <div className="wrapper">
              <p className="title">Order Number</p>
              <p className="content">MTAWEB-3A86D4DB</p>
            </div>
            <div className="wrapper">
              <p className="title">Purchase Date</p>
              <p className="content">2019-11-07 14:01:48</p>
            </div>
            <div className="wrapper">
              <p className="title">Items</p>
              <p className="content">
                Way Kambas Mini Ebony
                2 x IDR 1.024.000
                Sikka (Ebony & Mapple)
                1 x IDR 1.264.000
              </p>
            </div>
            <div className="wrapper">
              <p className="title">Name</p>
              <p className="content">Rasyidin Arsyad Nasution</p>
            </div>
            <div className="wrapper">
              <p className="title">Phone</p>
              <p className="content">+18911188899</p>
            </div>
            <div className="wrapper">
              <p className="title">Email</p>
              <p className="content">rasyid.arsyad@gmail.com</p>
            </div>
            <div className="wrapper">
              <p className="title">Shipping Address</p>
              <p className="content">18 Richardson Drive Fountain Valley, CA 92708</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="wrapper-bottom">
        <div className="method">
          <FormControl className="form-control">
            <FormLabel className="title-label" id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              className="RadioGroup"
            >
              <div className="radio-btn">
                <FormControlLabel className="control-label" value="BNI Cicilan 0%" control={<Radio />} label="BNI Cicilan 0%" />
                <div className="radio-btn">
                  <img src={images.Logo_BNI_light} alt=''/>
                </div>
              </div>
              <div className="radio-btn">
                <FormControlLabel className="control-label" value="Mandiri Cicilan 0%" control={<Radio />} label="Mandiri Cicilan 0%" />
                <div className="radio-img">
                  <img src={images.Logo_mandiri_light} alt=''/>
                </div>
              </div>
              <div className="radio-btn">
                <FormControlLabel className="control-label" value="Bank Transfer" control={<Radio />} label="Bank Transfer" />
                <div className="radio-img">
                  <img src={images.Logo_Kredivo_light} alt=''/>
                </div>
              </div>
              <div className="radio-btn">
                <FormControlLabel className="control-label" value="Credit Card" control={<Radio />} label="Credit Card" />
                <div className="radio-img">
                  <img src={images.Logo_MC_light} alt=''/>
                  <img src={images.Logo_VISA_light} alt=''/>
                </div>
              </div>
              <div className="radio-btn">
                <FormControlLabel className="control-label" value="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" control={<Radio />} label="Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)" />
                <div className="radio-img">
                  <img src={images.Logo_Danamon_light} alt=''/>
                  <img src={images.Logo_UOB_light} alt=''/>
                  <img src={images.Logo_SC_light} alt=''/>
                </div>
              </div>
              <div className="radio-btn">
                <FormControlLabel className="control-label" value="GO-PAY" control={<Radio />} label="GO-PAY" />
                <div className="radio-img">
                  <img src={images.Logo_GOPAY_light} alt=''/>
                </div>
              </div>
              <div className="radio-btn">
                <FormControlLabel className="control-label" value="Krdivo" control={<Radio />} label="Krdivo" />
                <div className="radio-img">
                  <img src={images.Logo_Kredivo_light} alt=''/>
                </div>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div className="btn">
          <button className="btn-my-order">
            <p>Proceed Payment</p>
          </button>
        </div>
      </div>
    </PaymentWrapper>
  )
}

export default Payment;