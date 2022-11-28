import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 213px;
  background-color: #f2f2f2;
  position: relative;
  section {
    display: flex;
    width: 1190px;
    justify-content: space-between;
  }
  section > ul {
    display: flex;
  }
`;
export const FooterImgStyle = styled.img`
  width: 24px;
  height: 24px;
`;

export const SectionContactStyle = styled.section`
  ::after {
    content: "";
    width: 1190px;
    height: 1px;
    background-color: #c4c4c4;
    position: absolute;
    top: 119px;
  }
  ul {
    gap: 20px;
  }

  font-family: "Roboto";
  font-weight: 700;
  font-size: 2.2rem;
  margin-bottom: 30px;
`;

export const SectionInfoStyle = styled.section`
  font-size: 1.4rem;
  margin-top: 44px;
  line-height: 1;

  address {
    display: flex;
    align-items: center;
  }

  address p + p::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 15px;
    background-color: #4f4f4f;
    vertical-align: bottom;
    margin: 0 5px;
  }

  p {
    font-weight: 400;
    color: #4f4f4f;
  }

  p > strong {
    font-weight: 700;
    color: bl;
  }
`;
