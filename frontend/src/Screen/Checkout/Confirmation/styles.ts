import styled from "styled-components";

const ConfirmWrapper = styled.div`
  margin: 50px 165px 0 165px;

  & > .wrapper-top{
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    & > .order-confirm{
      width: 48%;
      height: 500px;
      padding: 30px;
      background-color: #FFFFFF;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      & > .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        & > .title{
          font-family: 'Taviraj';
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          color: #333333;
        }

        & > .content{
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #333333;
        }
      }

      & > button{
        width: 367px;
        height: 68px;
        background: #D84727;
        border: none;

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
  }
`
export {ConfirmWrapper};