/* eslint-disable jsx-a11y/alt-text */
import React from "react"

import '../Banner/styles.css';
import images from '../../../assets/Images';

interface Props {}

const Banner = (props: Props) => {
	return (
    <div className="Container">
      <div className="banner">
        <div className="Img-banner">
          <img className="Vector" src={images.Vector_1}/>
        </div>
        <div className="Img-banner">
          <img className="Vector2" src={images.Vector_2}/>
        </div>
        <div className="Img-banner">
          <img className="Vector3" src={images.Vector_3}/>
        </div>
        <div className="col-9 content__col">
          <div className="Img-banner">
            <img className="Img-Pro-Ban" src={images.Product_1}/>
          </div>
          <div className="Info">
            <p className="Name-Pro">WAY KAMBAS MINI EBONY</p>
            <p className="border1"/>
            <p className="Info-Pro">
              MATOA Way Kambas - This wood is chosen to represent the Sumatran 
              Rhino's skin which is designed with an overlap effect 
              on its strap to represent Rhino's skin.
            </p>
            <p className="Disco">Discover</p>
            <div className="Btn">
              <button className="Btn-Cart">
                <p>Add to cart</p>
                </button>
              <button className="Btn-Cil">
                <img src={images.Logo_Cilil}/>
              </button>
            </div>
          </div>
        </div>
        <div className="Btn-LR">
            <button className="Btn-Left">
              <img src={images.Btn_Left}/>
            </button>
            <button className="Btn-Right">
              <img src={images.Btn_Right}/>
            </button>
          </div>
      </div>
    </div>
  );
};

export default Banner;