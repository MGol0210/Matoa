import React from "react";
import { FooterBWrapper } from "./styles";
import images from "../../../../assets/Images";

const FooterBot: React.FC = () => {
  return(
    <FooterBWrapper>
      <div className="footer-overview">
        <div className="footer-wrapper">
          <div className="img-wrapper">
            <img src={images.Logo_BNI} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_Danamon} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_MC} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_PermataBank} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_Kredivo} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_SC} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_UOB} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_VISA} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_mandiri} alt="logo-icon" />
          </div>
          <div className="img-wrapper">
            <img src={images.Logo_GOPAY} alt="logo-icon" />
          </div>
        </div>
      </div>
    </FooterBWrapper>
  )
}

export default FooterBot;