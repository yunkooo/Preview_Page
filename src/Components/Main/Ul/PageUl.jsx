import { PageUlStyle, PageLinkStyle } from "./PageUlStyle";

export const PageUl = () => {
  return (
    <PageUlStyle>
      <li>
        <PageLinkStyle to={"/"}>현재상영영화</PageLinkStyle>
      </li>
      <li>
        <PageLinkStyle to={"/upcomming"}>개봉예정영화</PageLinkStyle>
      </li>
      <li>
        <PageLinkStyle to={"/boxoffice"}>박스오피스</PageLinkStyle>
      </li>
    </PageUlStyle>
  );
};
