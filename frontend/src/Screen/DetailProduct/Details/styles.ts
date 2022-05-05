import styled from "styled-components";

const DetailWrapper = styled.div`
  margin: 30px 165px 0 165px;

  & > .title-wrapper{
    border-bottom: 1px solid #999999;
    height: 45px;
    & > .detail-title{
      width: 85%;
      display: flex;
      justify-content: space-around;

      & > .title{
        height: 20px;
        font-family: "Taviraj";
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #999999;
        background-color: #E5E5E5;
      }

      & > .title:hover{
        text-decoration: none;
      }

      & > .highlight{
        font-family: "Taviraj";
        font-weight: 600;
        font-size: 20px;
        line-height: 32px;
        color: #D84727;
        background-color: #E5E5E5;
        border-bottom: 1px solid #D84727;
      }

      & > .highlight:hover{
        text-decoration: none;
      }
    }
  }

  & > .detail-content{
    padding: 30px;
    & > .detail-wrapper{
      & > .title{
        font-family: "Taviraj";
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        color: #333333;
      }

      & > .content{
        font-family: Nunito;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 28px;
        color: #555555;
      }
    }
  }

  & > .describe-img{
    margin: 0 0 50px 0;
    display: flex;
    justify-content: center;
  }

`

export {DetailWrapper};