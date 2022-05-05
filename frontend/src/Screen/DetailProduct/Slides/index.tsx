import React from "react";

import { SlideWrapper } from "./styles";
import images from "../../../assets/Images";

const Slides: React.FC = () => {
  return(
    <SlideWrapper>
      <div className="slide-left">
        <div className="list-img">
          <img className="img-review-pro" src={images.Product_1} alt='img'/>
          <img className="img-review-pro" src={images.Product_1_Review_1} alt='img'/>
          <img className="img-review-pro" src={images.Product_1_Review_2} alt='img'/>
          <img className="img-review-pro" src={images.Product_1_Review_3} alt='img'/>
        </div>
          <img className="img-main" src={images.Product_1} alt='img'/>
      </div>

      <div className="slide-right">
        <div className="info-product">
          <p className="product-name">WAY KAMBAS MINI EBONY</p>
            <p className="product-price">Rp 1.280.000</p>
          <p className="product-promotion">Rp 1.024.000</p>
        </div>

        <div className="choose-model">
          <p className="model-title">Choose Model</p>
          <button className="btn-model">
            <img src={images.Icon_Model_1} alt='icon-model'/>
          </button>
          <button className="btn-model">
            <img src={images.Icon_Model_2} alt='icon-model'/>
          </button>
        </div>

        <div className="btn-slide">
          <div className="quantity">
            <button className="btn-minus">
              <img src={images.Icon_Minus} alt='btn-quantity'/>
            </button>
            <p className="quantity-txt">1</p>
            <button className="btn-plus">
              <img src={images.Icon_Plus} alt='btn-quantity'/>
            </button>
          </div>

          <button className="btn-add-cart">
            <img src={images.Icon_AddCart} alt="btn"/>
            <p>Add to cart</p>
          </button>

          <button className="btn-cicil">
            <img src={images.Logo_Cilil} alt="btn"/>
          </button>
        </div>
      </div>
    </SlideWrapper>
  )
}

export default Slides;