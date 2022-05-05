import styled from "styled-components";

const FooterBWrapper = styled.div`
  background: #da5e42;
  & > .footer-overview {
    margin: 0 165px;

    & > .footer-wrapper {
      padding: 40px 55px 13px 55px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      & > .img-wrapper {
        width: 20%;
        display: flex;
        justify-content: center;
        margin: 0 0 10px 0;
        & > img {
          width: 100%;
          height: 100%;
          max-height: 100px;
          max-width: 100px;
          padding: 0 50xp 10px 50px;
        }
      }
    }
  }
`

export {FooterBWrapper};