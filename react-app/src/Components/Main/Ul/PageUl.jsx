import { PageUlStyle } from "./PageUlStyle";

export const PageUl = () => {
  return (
    <PageUlStyle>
      <li>
        <button type="button">현재상영영화</button>
      </li>
      <li>
        <button type="button">개봉예정영화</button>
      </li>
      <li>
        <button type="button">박스오피스</button>
      </li>
    </PageUlStyle>
  );
};
