/* eslint-disable jsx-a11y/alt-text */
import React from "react"

import './styles.ts';
import { dataProducts } from '../../../common/data';
import { DealsStyles } from "./styles";
import { useGetAllProductsQuery } from "../../../features/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cartSlice";

interface Props {}

const Banner = (props: Props) => {
  const dispatch = useDispatch();

  const {data} = useGetAllProductsQuery('');

  const handleAddToCart =(item : dataProducts) => {
    dispatch(addToCart(item))
  }

	return (
    <DealsStyles>
      <p className="monthly__deals-label">Monthly Deals</p>
      <div className="separation"></div>
      <div className="product-overview">
        {data?.map((item : dataProducts) => {
          return (
            <div className="product-wrapper" key={item.id}>
              <img src={item.img} alt={item.name} />
              <div className="product-info">
                <p className="product-name">{item.name}</p>
                <p className="product-discount">{item.discount}% Off</p>
                <p className="product-price">{item.price}</p>
                <p className="product-promotion">Rp {item.promotion}</p>
              </div>
              <button onClick={()=> handleAddToCart(item)}>
                Add to cart
              </button>
            </div>
          );
        })}
      </div>
    </DealsStyles>
  );
};

export default Banner;