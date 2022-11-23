import PosterImg from "./PosterImg/PosterImg";
import PosterText from "./PosterText/PosterText";
import {
  PosterLiStyle,
  PosterDivStyle,
  PosterBtnDivStyle,
  PosterBtnStyle,
  PosterBtnPreview,
} from "./PosterStyle";

export default function Poster({ 제목, 개요, 이미지, 개봉, 출연, 평점 }) {
  return (
    <PosterLiStyle>
      <PosterDivStyle>
        <PosterImg img={이미지} />
        <PosterText
          제목={제목}
          개요={개요}
          평점={평점}
          개봉={개봉}
          출연={출연}
        />
      </PosterDivStyle>

      <PosterBtnDivStyle>
        <PosterBtnStyle type="button">예매하기</PosterBtnStyle>
        <PosterBtnPreview type="button">예고편</PosterBtnPreview>
      </PosterBtnDivStyle>
    </PosterLiStyle>
  );
}
