import React from 'react'
import { TestimonialsWrapper } from './styles';

import images from '../../../assets/Images';

const Testimonials: React.FC = () => {
  return (
    <TestimonialsWrapper>
      <div className="testimonials-overview">
        <div className="wrapper-left">
          <img src={images.Vector_4} alt="img-vector" className="vector1-img" />
          <img src={images.Vector_5} alt="img-vector" className="vector2-img" />
          <img src={images.Vector_6} alt="img-vector" className="vector3-img" />
          <img src={images.Product_17} alt="img-testi" className="testi-img" />
        </div>
        <div className="wrapper-right">
          <p className="testi-title">Testimonials</p>
          <div className="separation"></div>
          <p className="testi-content">
            Loving my new KAILI watch from @matoa_id, the first ever Indonesian
            watch local brand that uses wood as their main material. Like any
            other Matoa products, KAILI is inspired by Indonesian heritage.
          </p>
          <p className="testi-creater">Gita Savitri</p>
          <p className="testi-position">Content Creator/Influencer</p>
        </div>
      </div>
      <div className="button-wrapper">
        <button className="left">
          <img src={images.Left_Arrow} alt="" />
        </button>
        <button className="right">
          <img src={images.Right_Arrow} alt="" />
        </button>
      </div>
    </TestimonialsWrapper>
  )
}

export default Testimonials;
