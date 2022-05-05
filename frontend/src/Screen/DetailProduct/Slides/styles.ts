import styled from "styled-components";

const SlideWrapper = styled.div`
  margin: 30px 165px 0 0;
  display: flex;
  justify-content: space-between;
  & > .slide-left{
    width: 50%;
    height: 548px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f1ddc9;
    position: relative;

    & > .list-img{
      width: 80px;
      height: 470px;
      align-items: center;

      & > .img-review-pro{
        width: 100%;
        padding-bottom: 30px;
      }
    }

    & > .img-main{
      position: absolute;
      right: -120px;
      top: 30px;
    }
  }

  & > .slide-right{
    width: 37%;

    & > .info-product {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      & > .product-name {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 80px;
        letter-spacing: 0.02em;
        color: #333333;
        margin: 0 0 4px 0;
      }
      & > .product-price {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #777777;
        text-decoration-line: line-through;
        text-decoration-color: #d93f3f;
        margin: 4px 0 0 0;
      }
      & > .product-promotion {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 40px;
        letter-spacing: 0.02em;
        color: #222222;
      }
    }

    & > .choose-model{
      & > .model-title{
        font-family: "Taviraj";
        font-weight: 600;
        font-size: 16px;
        line-height: 27.3px;
      }

      & > .btn-model{
        width: 40px;
        height: 40px;
        border-radius: 20px;
        border: none;
        padding: 0;
        margin-right: 15px;

          & > img{
          width: 100%;
        }
      }
    }

    & > .btn-slide{
      margin: 40px 0 0 0;
      height: 62px;
      display: flex;
      justify-content: space-between;
      

      & > .quantity{
        width: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > .btn-minus{
          width: 30px;
          height: 30px;
          border: 1px solid #777777;
          align-items: center;
          padding-bottom: 5px;
        }

        & > .btn-plus{
          width: 30px;
          height: 30px;
          background-color: #D84727;
          border: none;
          padding: 0 0 5px 1px;
        }

        & > .quantity-txt{
          font-size: 36px;
          font-family: 'Taviraj';
          padding-top: 15px;
        }
      }

      & > .btn-add-cart{
        width: 45%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #D84727;
        border: none;

        & > p{
          font-size: 20px;
          font-family: Taviraj;
          padding-top: 15px;
          color: #FFFFFF;
        }
      }

      & > .btn-cicil{
        width: 25%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #E5E5E5;
        border: 2px solid #D84727;
      }
    }
  }
`

export {SlideWrapper};