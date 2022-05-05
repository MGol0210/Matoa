import styled from "styled-components";

const SocialWrapper = styled.div`
  margin: 77px 165px 0 165px;

  & > .social-title {
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
    margin: 8px 0 32px 0;
  }

  & > .img-wrapper {
    padding: 0 0 75px 0;
    display: flex;
    justify-content: center;

    & > img {
      width: 100%;
      height: 100%;
      max-width: 222px;
      max-height: 222px;
    }
  }
`

export {SocialWrapper};