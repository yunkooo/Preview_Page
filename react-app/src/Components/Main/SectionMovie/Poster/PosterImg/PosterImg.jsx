import { PosterImgStyle } from "./PosterImgStyle";

export default function PosterImg({ img }) {
  console.log(img)
  // const imgSrc = 'public/img/PosterImg/${img}`;
  const imgSrc = `${process.env.PUBLIC_URL}/img/PosterImg/${img}`;
  return <PosterImgStyle tabIndex={0} src={imgSrc} />;
}
