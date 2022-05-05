import styled from 'styled-components';

const CategoryWrapper = styled.div`
  margin: 211px 165px 0 165px;
  display: flex;
  justify-content: space-between;
  & > .category-overview {
    width: calc(50% - 7.5px);
    background: white;
    position: relative;
    min-height: 270px;

    & > .category-wrapper {
      padding: 32px 0 0 32px;

      & > .category-title {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 400;
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.03em;
        color: #333333;
        margin: 0 0 8px 0;

        & > span {
          font-weight: bold;
        }
      }

      & > .category-content {
        font-family: "Nunito";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.03em;
        color: #777777;
        margin: 0 163px 4px 0;
      }

      & > .discover {
        font-family: "Taviraj";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 27px;
        letter-spacing: 0.03em;
        color: #333333;
        border-bottom: 1px solid #333333;
        display: inline-block;
      }
    }
    img {
      position: absolute;
      right: 8px;
      bottom: 8px;
      width: auto;
    }
  }
`;

export { CategoryWrapper };
