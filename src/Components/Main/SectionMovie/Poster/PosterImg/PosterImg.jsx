import { PosterImgStyle } from "./PosterImgStyle";

export default function PosterImg({ img }) {
  const imgSrc = `${process.env.PUBLIC_URL}/img/posterImg/${img}`;
  return <PosterImgStyle tabIndex={0} src={imgSrc} />;
}
