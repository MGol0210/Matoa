import styled from "styled-components";

const PaymentWrapper = styled.div`
  margin: 50px 165px 0 165px;

  & > .wrapper-top{
    display: flex;
    justify-content: space-between;
    & > .detail-order-left{
      width: 48%;

      & > .order{
        height: 500px;
        padding: 30px;
        background-color: #FFFFFF;
        margin-bottom: 30px;
        & > .title{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 48px;
          color: #333333;
        }

        & > .detail-left{
          padding: 0 0 30px 0;
          border-bottom: 1px solid #333333;
          & > .wrapper{
            display: flex;
            justify-content: flex-start;
            & > .title{
              width: 50%;
              font-family: 'Taviraj';
              font-style: normal;
              font-weight: 500;
              font-size: 24px;
              line-height: 60px;
              color: #333333;
              padding: 0;
              margin: 0;
            }

            & > .content{
              width: 50%;
              font-family: 'Taviraj';
              font-style: normal;
              font-weight: 500;
              font-size: 24px;
              line-height: 60px;
              color: #333333;
              padding: 0;
              margin: 0;
            }
          }
        }

        & > .total{
          & > .wrapper{
            display: flex;
            justify-content: flex-start;
            & > .title{
              width: 50%;
              font-family: 'Taviraj';
              font-style: normal;
              font-weight: 500;
              font-size: 24px;
              line-height: 60px;
              color: #333333;
              padding-top: 30px;
              margin: 0;
            }

            & > .content{
              width: 50%;
              font-family: 'Taviraj';
              font-style: normal;
              font-weight: 500;
              font-size: 36px;
              line-height: 60px;
              color: #333333;
              padding-top: 30px;
              margin: 0;
            }
          }
        }
      }

      & > .payment{
        padding: 30px;
        background-color: #FFFFFF;
        height: 180px;

        & > .payment-top{
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          height: 45%;

          & > .title{
            font-family: 'Taviraj';
            font-style: normal;
            font-weight: 600;
            font-size: 36px;
            line-height: 48px;
            color: #333333;
          }

          & > .time{
            font-family: 'Taviraj';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 48px;
            color: #D93F3F;
          }
        }

        & > .payment-bottom{
          height: 55%;

          & > .content{
            font-family: 'Nunito';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 32px;
            color: #333333;
          }
        }
      }
    }

    & > .detail-order-right{
      width: 48%;
      padding: 30px;
      background-color: #FFFFFF;

      & > .title{
        font-family: 'Taviraj';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
        color: #333333;
      }

      & > .detail-right{
        padding: 0 0 30px 0;
        & > .wrapper{
          display: flex;
          justify-content: flex-start;
          padding: 10px 0 10px 0;
          & > .title{
            width: 50%;
            font-family: 'Taviraj';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            color: #333333;
            padding: 0;
            margin: 0;
          }

          & > .content{
            width: 50%;
            font-family: 'Taviraj';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 32px;
            color: #333333;
            padding: 0;
            margin: 0;
          }
        }
      }
    }
  }

  & > .wrapper-bottom{
    margin: 30px 0 30px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    & > .method{
      width: 100%;
      height: 500px;
      padding: 30px;
      background-color: #FFFFFF;
      margin-bottom: 50px;

      & > .form-control{
        display: flex;
        & > .title-label{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 600;
          font-size: 36px;
          line-height: 48px;
          color: #333333;
        }

        & > .RadioGroup{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin-top: 30px;

          & > .radio-btn{
            height: 150px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;

            & > .control-label{
              & > span{
                font-family: 'Taviraj';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 32px;
                color: #333333;
              }
            }

            & > .radio-img{
              display: flex;
              justify-content: space-around;
            }

            & > img{
              width: 100px;
            }
          }
        }
      }
    }

    & > .btn{
      width: 48%;
      height: 55px;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: flex-end;

      & > .btn-continue{
        width: 48%;
        align-items: center;
        border: 1px solid #D84727;
        & > p{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 32px;
          color: #D84727;
          padding: 0;
          margin: 0;
        }
      }

      & > .btn-my-order{
        width: 48%;
        align-items: center;
        border: none;
        background-color: #D84727;

        & > p{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 32px;
          color: #FFFFFF;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`
export {PaymentWrapper};