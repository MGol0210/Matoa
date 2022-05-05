import styled from "styled-components";

const FooterTWrapper = styled.div`
  padding: 43px 165px 75px 165px;
  background: #d84727;
  display: flex;
  justify-content: space-between;
  
  & > .info-page-overview {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc( 25% - 15px);

    & > img {
      width: 100%;
      height: 100%;
      max-width: 178px;
      max-height: 22px;
      margin: 8px 0 27px 0;
    }
    & > .title {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 34px;
      letter-spacing: 0.02em;
      color: #ffffff;
      margin: 0 0 5px 0;
      max-width: 255px;
      height: auto;
    }
    & > .info {
      margin: 0 0 16px;
      & > .content {
        font-family: "Taviraj";
        font-style: normal;
        margin-bottom: 0;
        font-weight: 400;
        font-size: 16px;
        line-height: 27px;
        letter-spacing: 0.02em;
        color: #ffffff;
        height: auto;
      }
    }
  }

  & > .contact-page-overview {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: calc( 25% - 20px);
    margin: 0 0 0 5px;
  }
  .contact-title {
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 41px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
  .separation {
    background-color: white;
    height: 1.5px;
    width: 60px;
    margin: 0 0 16px 0;
  }
  .wrapper {
    display: flex;
    justify-content: space-between;

    .title {
      width: 120px;
      margin-bottom: 10;
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #ffffff;
    }

    .content {
      margin: 0;
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 32px;
      letter-spacing: 0.03em;
      color: #ffffff;
      min-width: 122px;
    }
    
  }

  .wrapper-icon {
    display: flex;
    justify-content: space-between;
    width: 75%;

  }
  .link-page-overview {
    width: calc( 25% - 50px);
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    letter-spacing: 0.03em;
    color: #ffffff;
  }
`

export {FooterTWrapper};