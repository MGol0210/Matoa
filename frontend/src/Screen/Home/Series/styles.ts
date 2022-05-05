import styled from "styled-components";

const SeriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & > .series-overview {
    margin: 228px 165px 0 165px;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

    & > .series-wrapper {
      width: calc(33.33% - 5px);

      & > .series-title {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 40px;
        letter-spacing: 0.02em;
        color: #333333;
        height: auto;
      }

      & > .separation {
        background-color: #000000;
        height: 1.5px;
        width: 65px;
        margin: 8px 0 52px 0;
      }
    }
  }
  & > .more {
    border: 1px solid #d84727;
    box-sizing: border-box;
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 0.03em;

    color: #d84727;
    padding: 16px 91px 16px 92px;
    max-width: 272px;
    max-height: 66px;
    width: 100%;
    margin: 55px auto 0 auto;
    background: #e5e5e5;
  }
`

export {SeriesWrapper};