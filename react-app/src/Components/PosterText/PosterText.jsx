import {
  PosterTextDivStyle,
  PosterTextPStyle,
  PosterTextH3Style,
} from "./PosterTextStyle";

export default function PosterText({ 제목, 개요, 평점, 개봉, 출연 }) {
  return (
    <>
      <PosterTextH3Style tabIndex={0}>{제목}</PosterTextH3Style>
      <PosterTextPStyle tabIndex={0}>
        <strong>개요</strong>
        {개요}
      </PosterTextPStyle>
      <PosterTextPStyle tabIndex={0}>
        <strong>평점</strong>
        {평점}
      </PosterTextPStyle>
      <PosterTextPStyle tabIndex={0}>
        <strong>개봉</strong>
        {개봉}
      </PosterTextPStyle>
      <PosterTextPStyle tabIndex={0}>
        <strong>출연</strong>
        {출연}
      </PosterTextPStyle>
    </>
  );
}
