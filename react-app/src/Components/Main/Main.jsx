import SectionMovie from "./SectionMovie/SectionMovie";
import { PageUl } from "./Ul/PageUl";
import { MainStyle } from "./MainStyle";

const Main = () => {
  return (
    <MainStyle>
      <h1>정글 시네마 영화 목록</h1>
      <PageUl />
      <SectionMovie />
    </MainStyle>
  );
};

export default Main;
