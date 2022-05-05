import React from "react";
import { DetailWrapper } from "./styles";
import { Link } from "react-router-dom";
import {dataContent} from '../../../common/data';
import images from "../../../assets/Images";

const listContent: dataContent[] = [
  {
    id: 0,
    title: "Material",
    content: ("MATOA Way Kambas - Sumatran Rhino comes with a material form of Makassar Ebony (Diospyros celebica). This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin. Sumatran Rhino has unique skin fold, the skin is fairly thin about 10-16mm, and is soft and pliable."),
  },
  {
    id: 1,
    title: "Case",
    content: "The case on this timepiece is made with Height 12.5mm, Width 36mm, Length 33mm and Dial Opening 25mm. The glass is equipped with K1 flat glass to increase the enhanced durability on timepieces as scratch resistant and anti fingerprint. This timepiece is also equipped with Hand Polish Brass Spacer for a longer usage periods.",
  },
  {
    id: 2,
    title: "Movement",
    content: "For the first time, MATOA comes with Seiko Quartz VD78 movement with small second function. A small second hand is above 6 o'clock position. This second hand dial is dedicated to Sumatran Rhino whom every second of its life is so precious because whenever Sumatran Rhino goes, it can be threatened by illegal poaching",
  },
  {
    id: 3,
    title: "Dial",
    content: "In the dial, there are double layer of Makassar Ebony Veneer with 3, 9 & 12 o'clock laser cut brass plate index."
  },
  {
    id: 4,
    title: "Hand",
    content: "The hour, minute & small second hands on MATOA Way Kambas - Sumatran Rhino is outfitted with skeleton hand and brush finished with Gold Matte color. This new design aims at adding a value for this special edition.",
  },
  {
    id: 5,
    title: "Important to Note",
    content: "Wood color on watches is produced from a combination of mature and fresh wood but should not be viewed as a defect. It is a very natural process of wood aging.",
  },
];

const Details: React.FC = () => {
  return(
    <DetailWrapper>
      <div className="title-wrapper">
        <div className="detail-title">
          <Link className="highlight" to='/detail'>Detail</Link>
          <Link className="title" to='/detail'>Warranty</Link>
          <Link className="title" to='/detail'>Custom Engrave</Link>
          <Link className="title" to='/detail'>How to Adjust</Link>
          <Link className="title" to='/detail'>How to Care</Link>
          <Link className="title" to='/detail'>Gallery</Link>
      </div>
      </div>
      <div className="detail-content">
        {listContent.map((item) => (
          <div className="detail-wrapper">
            <div className="title">
              <p>{item.title}</p>
            </div>
            <div className="content">
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="describe-img">
        <img src={images.Describe} alt="img"/>
      </div>
    </DetailWrapper>
  )
}

export default Details;