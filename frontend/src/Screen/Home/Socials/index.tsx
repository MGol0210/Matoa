import React from "react";
import { SocialWrapper } from "./styles";
import images from "../../../assets/Images";

const Socials: React.FC = () => {
  return(
    <SocialWrapper>
      <p className="social-title">Instagram</p>
      <div className="separation"></div>
      <div className="img-wrapper">
        <img src={images.Social_1} alt="ig-img"/>
        <img src={images.Social_2} alt="ig-img"/>
        <img src={images.Social_3} alt="ig-img"/>
        <img src={images.Social_4} alt="ig-img"/>
        <img src={images.Social_5} alt="ig-img"/>
      </div>
    </SocialWrapper>
  )
}

export default Socials;