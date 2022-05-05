/* eslint-disable jsx-a11y/alt-text */
import React from "react"

import './styles.ts';
import images from '../../../assets/Images';
import { dataCategory } from '../../../common/data';
import { CategoryWrapper } from "./styles";

const CATEGORY: dataCategory[] = [
  {
    id: 0,
    title: "Luxurious",
    hightlight: " Eyewear",
    content: "See the beauty of exotic world with the luxurious glasses",
    img: images.Product_7,
  },
  {
    id: 1,
    title: "Comfortable",
    hightlight: " Watches",
    content: "Feels the balancing function and beauty in our wooden watches",
    img: images.Product_8,
  },
];

interface Props {}

const Discover = (props: Props) => {
	return (
    <CategoryWrapper>
      {CATEGORY.map((item) => {
        return (
          <div className="category-overview" key={item.id}>
            <div className="category-wrapper">
              <p className="category-title">
                {item.title}
                <span>{item.hightlight}</span>
              </p>
              <p className="category-content">{item.content}</p>
              <p className="discover">Discover Now</p>
            </div>
            <img src={item.img} alt="" />
          </div>
        );
      })}
    </CategoryWrapper>
  );
};

export default Discover;