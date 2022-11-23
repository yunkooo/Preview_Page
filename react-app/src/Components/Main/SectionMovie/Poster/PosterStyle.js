import styled from "styled-components";

export const PosterLiStyle = styled.li`
  width: 220px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #bdbdbd;
  background-color: #f2f2f2;
  overflow: hidden;
`;

export const PosterDivStyle = styled.div`
  padding: 19px 20px 10px;
  overflow: hidden;
  background-color: #fff;
`;

export const PosterBtnDivStyle = styled.div`
  display: flex;
`;

export const PosterBtnStyle = styled.button`
  padding: 9px 23px 10px 23px;
  width: 50%;
  background-color: inherit;
  border-top: 1px solid #bdbdbd;
`;
export const imgSrc = `./img/posterImg/아이콘_재생.svg`;
export const PosterBtnPreview = styled.button`
  padding: 9px 23px 10px 23px;
  width: 50%;
  background-color: inherit;
  border-top: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  &::before {
    content: "";
    display: inline-block;
    background: url(${imgSrc});
    width: 14px;
    height: 14px;
    background-size: cover;
    vertical-align: top;
    margin-right: 3px;
  }
`;
