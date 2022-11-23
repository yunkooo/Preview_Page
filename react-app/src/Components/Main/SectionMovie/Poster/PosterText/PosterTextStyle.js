import styled from "styled-components";

export const PosterTextDivStyle = styled.div`
  padding: 19px 20px 10px;
  overflow: hidden;
  background-color: #fff;
`;

export const PosterTextPStyle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 8px;
  float: left;
`;

export const PosterTextRatingPStyle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #000;
  margin-bottom: 8px;
  float: right;
`;

export const PosterTextH3Style = styled.h3`
font-weight: 900;
font-size: 1.6rem;
padding: 11px 0 12px;
}
`;

export const PosterTextStrongStyle = styled.strong`
  font-weight: 400;
  color: #828282;
  margin-right: 5px;
`;

export const PosterTextImgStyle = styled.strong`
  font-weight: 400;
  color: #828282;
  margin-right: 5px;

  &::after {
    content: "";
    display: inline-block;
    width: 14px;
    height: 14px;
    background-image: url("../img/별점이미지.png/Star.svg");
    vertical-align: top;
    margin-left: 5px;
    background-size: cover;
  }
`;
