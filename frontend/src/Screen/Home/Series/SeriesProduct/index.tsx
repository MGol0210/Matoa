import React from "react";
import {SeriesPWrapper} from './styles';
import {listProduct} from './products';

type IProps = {
  name: string;
};


const SeriesProduct: React.FC<IProps> = ({ name }) => {
  return(
    <SeriesPWrapper>
      <div className="list-product-overview">
        {listProduct
          .filter((item) => item.series === name)
          .map((item) => (
            <div className="product-wrapper">
              <div className="img-wrapper">
                <img src={item.img} alt="product" />
              </div>
              <div className="info-product">
                <p className="product-name">{item.name}</p>
                {item.price ? (
                  <p className="product-price">Rp {item.price}</p>
                ) : (
                  <></>
                )}
                <p className="product-promotion">Rp {item.promotion}</p>
              </div>
            </div>
          ))
          }
      </div>
    </SeriesPWrapper>
  );
};

export default SeriesProduct;