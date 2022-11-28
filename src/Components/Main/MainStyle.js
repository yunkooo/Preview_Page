import styled from "styled-components";

export const MainStyle = styled.main`
  width: 1060px;
  height: 1170px;
  background: #f2f2f2;
  margin: 91px auto 135px;
  padding: 41px 28px 31px;
  border-radius: 15px;

  h1 {
    font-family: "Noto Sans KR", sans-serif;
    font-weight: 700;
    font-size: 2.4rem;
    text-align: center;
    
    &::after {
        content: "";
        width: 650px;
        height: 2px;
        display: block;
        background: #bdbdbd;
        margin: 37px auto 18px;
    }
  }
  }
`;
