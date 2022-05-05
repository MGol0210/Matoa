import styled from "styled-components";

const SeriesPWrapper = styled.div`
  & > .list-product-overview {
    & > .product-wrapper {
      margin: 0 0 32px 0;
      display: flex;
      & > .img-wrapper {
        background: #f1ddc9;
        max-width: 131px;
        max-height: 131px;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        margin: 0 24px 0 0;

        & > img {
          width: 100%;
          height: 100%;
          max-width: 68px;
          max-height: 100px;
          background: #f1ddc9;
        }
      }

      & > .info-product {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        & > .product-name {
          font-family: "Taviraj";
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
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
    }
  }
`

export {SeriesPWrapper}