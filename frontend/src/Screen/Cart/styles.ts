import styled from "styled-components";

const CartWrapper = styled.div`
  .cart-wrapper{
    padding-bottom: 25px;
    margin-bottom: 25px;
    border-bottom: 1px solid #999999;
    display: flex;
    justify-content: space-between;

    & > .cart-left{
      width: 40%;
      height: 150px;
      display: flex;
      justify-content: space-between;

      & > .product-img{
        width: 144px;
        height: 144px;
        background-color: #F1DDC9;
        position: relative;

        & > img{
          width: 60%;
          height: 80%;
          position: absolute;
          left: 25px;
          top: 15px;
        }
      }

      & > .product-info {
        width: 60%;
        height: 100%;

        & > .product-name {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #333333;
          margin: 0;
        }

        & > .product-price {
          text-decoration-line: line-through;
          text-decoration-color: #d93f3f;
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #777777;
          margin: 0;
        }

        & > .product-promotion {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 50px;
          color: #333333;
          margin: 0;
        }

        & > .product-collection{
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #555555;
          margin: 0;
        }

        & > .product-message{
          font-family: "Nunito";
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          color: #555555;
          margin: 0;
        }
      }
    }

    & > .cart-right{
      width: 35%;
      height: 150px;
      justify-content: flex-end;
      
      & > .select-packing{
        height: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        & > p{
          font-family: "Taviraj";
          font-style: normal;
          font-size: 16px;
          font-weight: 500;
          line-height: 24px;
        }
      }

      & > .Btn{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 20px;

        & > .Btn-quantity{
          width: 30%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          & > .Btn-Minus{
            width: 30px;
            height: 30px;
            border: 1px solid #777777;
            align-items: center;
            padding-bottom: 5px;
            background-color: #F7F6F4;
          }

          & > .Btn-Plus{
            width: 30px;
            height: 30px;
            background-color: #D84727;
            border: none;
            padding: 0 0 5px 1px;
          }

          & > .quantity-txt{
            font-size: 24px;
            font-family: 'Taviraj';
            padding-top: 15px;
          }
        }

        & > .Btn-total{
          width: 65%;
          display: flex;
          align-items: center;
          justify-content: space-between;

          & > p{
            font-family: "Taviraj";
            font-weight: 600;
            font-size: 24px;
            line-height: 32px;
            padding-top: 15px;
          }

          & > .Btn-Trash{
            width: 35px;
            height: 35px;
            border: 1px solid #D93F3F;
            align-items: center;
            padding-bottom: 5px;
            background-color: #F7F6F4;
          }
        }
      }
    }
  }

  & > .modal-bottom{
    width: 100%;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > .total{
      width: 100%;
      height: 50%;
      display: flex;
      justify-content: space-between;

      & > .kode-promo{
        width: 40%;
        display: flex;
        justify-content: space-between;

        & > .name{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 24px;
          color: #333333;
        }

        & > .discount{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 24px;
          color: #01522D;
        }
      }

      & > .subtotal{
        width: 25%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > .subtotal-txt{
            font-family: 'Taviraj';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
          }
        
        & > .sub-total{
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;

          & > .product-price {
            text-decoration-line: line-through;
            text-decoration-color: #d93f3f;
            font-family: "Taviraj";
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #777777;
            margin: 0;
          }

          & > .product-promotion {
            font-family: "Taviraj";
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            color: #333333;
            margin: 0;
          }
        }
      }
    }

    & > .check-out{
      width: 100%;
      height: 45%;
      background-color: #D84727;
      border: none;
      
      & > .check-out-link{
        & > p{
          font-family: "Taviraj";
          font-size: 24px;
          font-weight: 600;
          color: #FFFFFF;
          line-height: 50px;
        }
      }

      & > .check-out-link:hover{
        text-decoration: none;
      }
    }
  }
`
export {CartWrapper};