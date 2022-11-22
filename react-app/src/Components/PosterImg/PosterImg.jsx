import { PosterImgStyle } from "./PosterImgStyle";

export default function PosterImg({ img }) {
  const imgSrc = `img/PosterImg/${img}`;
  return <PosterImgStyle tabIndex={0} src={imgSrc} />;
}
