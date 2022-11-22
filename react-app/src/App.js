import Poster from "./Components/Poster/Poster";
import { useContext } from "react";
import { data } from "./data";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 10px;
    }

    button{
        border : none;
        cursor : pointer;
    }

    * {
    box-sizing: border-box;
    }
`;

const PosterUlStyle = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;

function App() {
  console.log(data._currentValue[0]);
  return (
    <>
      <GlobalStyle />
      <PosterUlStyle>
        {useContext(data).map(
          ({ id, 제목, 개요, 이미지, 개봉, 출연, 평점 }) => (
            <Poster
              key={id}
              제목={제목}
              개요={개요}
              이미지={이미지}
              개봉={개봉}
              출연={출연}
            />
          )
        )}
      </PosterUlStyle>
    </>
  );
}
export default App;
