import styled from "styled-components";

const TestimonialsWrapper = styled.div`
  padding: 20px 0 0 0;

  & > .testimonials-overview {
    padding: 100px 0 0 0;
    display: flex;

    & > .wrapper-left {
      width: 515px;
      height: 300px;
      background: #f1ddc9;
      position: relative;
      margin-right: 249px;

      & > .vector1-img {
        width: 90%;
        position: absolute;
        top: -100px;
      }
      
      & > .vector2-img {
        width: 90%;
        position: absolute;
        top: -45px;
      }

      & > .vector3-img {
        width: 90%;
        position: absolute;
      }

      & > .testi-img {
        max-width: 511px;
        max-height: 321px;
        width: 100%;
        position: absolute;
        left: 165px;
        top: 67px;
      }
    }

    & > .wrapper-right {
      margin: 0 165px 0 80px;
      & > .testi-title {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0.02em;
        color: #333333;
        margin: 8px 0 0 0;
      }
      & > .separation {
        background-color: #000000;
        height: 1.5px;
        width: 128px;
        margin: 8px 0 54px 0;
      }

      & > .testi-content {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 0.03em;
        color: #333333;
        margin: 0 0 32px 0;
        max-width: 511px;
        width: 100%;
        height: auto;
      }

      & > .testi-creater {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: 0.03em;
        color: #333333;
        margin: 0 0 2px 0;
      }

      & > .testi-position {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 32px;
        letter-spacing: 0.03em;
        color: #777777;
      }
    }
  }
  & > .button-wrapper {
    margin: 121px 0 0 182px;
    display: flex;

    & > button {
      border: none;
      background: #e5e5e5;
    }

    & > .left {
      margin: 0 26px 0 0;
    }
  }
`
export {TestimonialsWrapper}