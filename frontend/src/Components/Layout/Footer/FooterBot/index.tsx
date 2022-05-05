import React from "react";
import { FooterTWrapper } from "./styles";
import images from "../../../../assets/Images";

const FooterTop: React.FC = () => {
  return(
    <FooterTWrapper>
      <div className="info-page-overview">
        <img src={images.Logo_Footer} alt="footer-logo" />
        <p className="title">Address</p>
        <div className="info">
          <p className="content">Store & Offiece</p>
          <p className="content">
            Jl. Setrasari Kulon III, No. 10-12, Sukarasa, Sukasari, Bandung,
            Jawa Barat, Indonesia 40152
          </p>
        </div>
        <p className="title">Office Hour</p>
        <div className="info">
          <p className="content">Monday - Sunday</p>
          <p className="content">10.00 - 18.00</p>
        </div>
      </div>
      <div className="contact-page-overview">
        <p className="contact-title">Get in touch</p>
        <div className="separation"></div>
        <div className="info-contact-wrapper">
          <div className="wrapper">
            <p className="title">Phone</p>
            <p className="content">022-20277564</p>
          </div>
          <div className="wrapper">
            <p className="title">Service Center</p>
            <p className="content">0811-233-8899</p>
          </div>
          <div className="wrapper">
            <p className="title">Customer Service</p>
            <p className="content">0811-235-9988</p>
          </div>
          <div className="wrapper-icon">
            <img src={images.Icon_Fb} alt="icon_social"/>
            <img src={images.Icon_Ig} alt="icon_social"/>
            <img src={images.Icon_Tw} alt="icon_social"/>
            <img src={images.Icon_Yt} alt="icon_social"/>
          </div>
        </div>
      </div>
      <div className="link-page-overview">
        <p className="contact-title">Useful Link</p>
        <div className="separation"></div>
        <ul>
          <li className="list-item">Warranty & Complaints</li>
          <li className="list-item">Order & Shipping</li>
          <li className="list-item">Tracking Order</li>
          <li className="list-item">About Us</li>
          <li className="list-item">Repair</li>
          <li className="list-item">Terms</li>
          <li className="list-item">FAQ</li>
        </ul>
      </div>
      <div className="link-page-overview">
        <p className="contact-title">Campaign</p>
        <div className="separation"></div>
        <ul>
          <li className="list-item">Mengenal Arti Cukup</li>
          <li className="list-item">Tell Your Difference</li>
          <li className="list-item">Waykambas</li>
          <li className="list-item">Rebrand</li>
          <li className="list-item">Gallery</li>
          <li className="list-item">Singo</li>
          <li className="list-item">Rakai</li>
        </ul>
      </div>
    </FooterTWrapper>
  )
}

export default FooterTop;