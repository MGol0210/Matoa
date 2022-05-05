import styled from "styled-components";

const CheckWrapper = styled.div`
  width: 55%;
  height: 50px;
  margin: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > .checkout{
    width: 20%;
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > a{
      display: flex;
      flex-direction: column;
      align-items: center;
      
      & > .checkout-img{
        width: 20%; 
        & > img{
          width: 100%;
        }
      }
    }
  }

  & > .separation {
    background-color: #000000;
    height: 1px;
    width: 20%;
    margin-top: 40px;
  }
`
export {CheckWrapper};