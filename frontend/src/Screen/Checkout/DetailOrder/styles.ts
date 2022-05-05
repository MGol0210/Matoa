import styled from "styled-components";

const OrderWrapper = styled.div`
  margin: 50px 165px 0 165px;

  & > .wrapper-top{
    display: flex;
    justify-content: space-between;
    & > .detail-order{
      width: 48%;
      height: 500px;
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

      & > .detail{
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

    & > .bill-add{
      width: 48%;
      height: 750px;
      background-color: #FFFFFF;
      padding: 30px;
      & > .title{
        font-family: 'Taviraj';
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 48px;
      }

      & > .detail{
        & > .wrapper{
          display: flex;
          flex-direction: column;
          border-bottom: 0.3px solid #333333;
          margin-bottom: 20px;
          & > .title{
            width: 50%;
            font-family: 'Taviraj';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #333333;
            padding: 0;
            margin: 0;
          }

          & > .content{
            width: 100%;
            font-family: 'Taviraj';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 24px;
            margin: 0;
            padding-top: 5px;
            padding-bottom: 5px;
            border: none;
            color: #333333;

            & > .option{
              color: #333333;
            }
          }
          
          & > .wrapper-1{
            display: flex;
            justify-content: space-between;
            & > .wrapper-2{
              width: 48%;
              display: flex;
              flex-direction: column;

              & > .title{
                width: 50%;
                font-family: 'Taviraj';
                font-style: normal;
                font-weight: 400;
                font-size: 16px;
                color: #333333;
                padding: 0;
                margin: 0;
              }

              & > .content{
                width: 100%;
                font-family: 'Taviraj';
                font-style: normal;
                font-weight: 400;
                font-size: 20px;
                line-height: 24px;
                margin: 0;
                padding-top: 5px;
                padding-bottom: 5px;
                border: none;
                color: #333333;

                & > .option{
                  color: #333333;
                }
              }
            }
          }
        }
      }
    }
  }

  & > .wrapper-bottom{
    margin: 30px 0 30px 0;
    display: flex;
    justify-content: flex-end;
    & > .btn{
      width: 48%;
      height: 55px;
      padding: 0;
      margin: 0;
      display: flex;
      justify-content: space-between;

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
        border: none;
        background-color: #D84727;
        :hover{
          text-decoration: none;
        }

        & > p{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 500;
          font-size: 20px;
          line-height: 50px;
          color: #FFFFFF;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
`
export {OrderWrapper};