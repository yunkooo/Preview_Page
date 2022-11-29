import SectionMovie from "./SectionMovie/SectionMovie";
import { PageUl } from "./Ul/PageUl";
import { MainStyle } from "./MainStyle";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Main = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <MainStyle>
      <h1 tabIndex={0}>정글 시네마 영화 목록</h1>
      <PageUl />
      <Routes>
      <Route path="/" element={<SectionMovie />} />
      <Route path="/upcomming" element={<SectionMovie />} />
      <Route path="/boxoffice" element={<SectionMovie />} />
      </Routes>
    </MainStyle>
    </BrowserRouter>
  );
};

export default Main;
