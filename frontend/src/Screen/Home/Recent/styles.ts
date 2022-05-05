import styled from "styled-components";

const RecentWrapper = styled.div`
  margin: 141px 0 0 0;
  display: flex;
  justify-content: space-between;

  & > .wrapper-left {
    margin: 0 0 0 165px;
    & > .recent-title {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 500;
      font-size: 36px;
      line-height: 40px;
      letter-spacing: 0.02em;
      color: #333333;
    }

    & > .separation {
      border: 1px solid #000000;
      width: 128px;
      margin: 8px 0 180px 0;
    }

    & > .recent-label {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 40px;
      letter-spacing: 0.02em;
      color: #777777;
      margin: 0 0 8px 0;
    }

    & > .recent-question {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 400;
      font-size: 36px;
      line-height: 48px;
      letter-spacing: 0.02em;
      color: #333333;
      margin: 0 0 45px 0;
      width: 100%;
      max-width: 350px;
    }

    & > .discover {
      font-family: "Taviraj";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 27px;
      letter-spacing: 0.02em;
      color: #d84727;
      border: 2px solid #d84727;
      box-sizing: border-box;
      padding: 15px 47px 16px 47px;
      background: #e5e5e5;
    }
  }

  & > .wrapper-right {
    width: 100%;
    max-width: 640px;
    max-height: 458px;
    background: #f1ddc9;
    margin: 15px 0 0 0;
    position: relative;

    & > .recent-img {
      max-width: 610px;
      max-height: 484px;
      width: 100%;
      position: absolute;
      right: 250px;
      top: 69px;
    }
  }
`

export {RecentWrapper};