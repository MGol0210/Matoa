/* eslint-disable jsx-a11y/alt-text */
import React from "react"

import './styles.ts';
import images from '../../../assets/Images';
import { dataProducts } from '../../../common/data';
import { DealsStyles } from "./styles";

export const listProduct: dataProducts[] = [
  {
    id: 0,
    img: images.Product_16,
    name: "Singo Maple",
    discount: 20,
    price: 1500000,
    promotion: 1264000,
    series: "maple",
    tag: "",
  },
  {
    id: 1,
    img: images.Product_2,
    name: "Singo Ebony",
    discount: 20,
    price: 1500000,
    promotion: 1264000,
    series: "maple",
    tag: "",
  },
  {
    id: 2,
    img: images.Product_3,
    name: "Rakai Ebony",
    discount: 15,
    price: 1280000,
    promotion: 1118000,
    series: "maple",
    tag: "",
  },
  {
    id: 3,
    img: images.Product_4,
    name: "Way Kambas Mini Maple",
    discount: 10,
    price: 1280000,
    promotion: 1024000,
    series: "maple",
    tag: "",
  },
];

interface Props {}

const Banner = (props: Props) => {
	return (
    <DealsStyles>
      <p className="monthly__deals-label">Monthly Deals</p>
      <div className="separation"></div>
      <div className="product-overview">
        {listProduct.map((item) => {
          return (
            <div className="product-wrapper" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="product-info">
                <p className="product-name">{item.name}</p>
                <p className="product-discount">{item.discount}% Off</p>
                <p className="product-price">{item.price}</p>
                <p className="product-promotion">Rp {item.promotion}</p>
              </div>
            </div>
          );
        })}
      </div>
    </DealsStyles>
  );
};

export default Banner;