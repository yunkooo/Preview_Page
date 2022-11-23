import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import Main from "./Components/Main/Main";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
      font-family: "Noto Sans KR", sans-serif;
      font-size: 10px;
    }

    button{
        background-color: inherit;
        border : none;
        cursor : pointer;
        padding : 5px
    }



    * {
    box-sizing: border-box;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Main />
    </>
  );
}
export default App;
