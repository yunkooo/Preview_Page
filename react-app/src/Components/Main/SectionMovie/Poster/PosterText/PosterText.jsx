import {
  PosterTextDivStyle,
  PosterTextPStyle,
  PosterTextH3Style,
  PosterTextStrongStyle,
  PosterTextImgStyle,
  PosterTextRatingPStyle,
} from "./PosterTextStyle";

export default function PosterText({ 제목, 개요, 평점, 개봉, 출연 }) {
  return (
    <>
      <PosterTextH3Style tabIndex={0}>{제목}</PosterTextH3Style>
      <PosterTextPStyle tabIndex={0}>
        <PosterTextStrongStyle>개요</PosterTextStrongStyle>
        {개요}
      </PosterTextPStyle>
      <PosterTextRatingPStyle tabIndex={0}>
        <PosterTextImgStyle>평점</PosterTextImgStyle>
        {평점}
      </PosterTextRatingPStyle>
      <PosterTextPStyle tabIndex={0}>
        <PosterTextStrongStyle>개봉</PosterTextStrongStyle>
        {개봉}
      </PosterTextPStyle>
      <PosterTextPStyle tabIndex={0}>
        <PosterTextStrongStyle>출연</PosterTextStrongStyle>
        {출연}
      </PosterTextPStyle>
    </>
  );
}
