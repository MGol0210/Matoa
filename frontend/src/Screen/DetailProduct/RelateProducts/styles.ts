import styled from 'styled-components';

const DealsStyles = styled.div`
margin: 92px 165px 100px 165px;
  & > .monthly__deals-label {
    font-family: "Taviraj";
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #333333;
  }

  & > .separation {
    background-color: #000000;
    height: 1.5px;
    width: 128px;
    margin: 8px 0 100px 0;
  }
  & > .product-overview {
    display: flex;
    justify-content: space-between;

    & > .product-wrapper {
      width: calc(25% - 15px);
      background: white;
      position: relative;
      display: flex;
      justify-content: center;
      flex-direction: column;

      & > img {
        width: 100%;
        max-width: 207px;
        max-height: 221px;
        position: absolute;
        top: -40px;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
      }
      & > .product-info {
        margin: 213px 24px 0 24px;
        height: 100%;

        & > .product-name {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 500;
          font-size: 24px;
          line-height: 32px;
          color: #333333;
          margin: 0 0 2px 0;
          height: auto;
        }

        & > .product-discount {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 24px;
          color: #777777;
          margin: 0 0 6px 0;
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
        }

        & > .product-promotion {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
          color: #333333;
          margin: 0 0 48px 0;
        }
      }

      & > .tags{
        background-color: red;
      }
    }
  }
`;

export {DealsStyles}