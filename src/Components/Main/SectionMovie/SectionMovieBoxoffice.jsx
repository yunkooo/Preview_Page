import React, { useContext } from "react";
import { boxOfficeData } from "../../../data";
import Poster from "./Poster/Poster";
import { SectionMovieStyle, UlStyle } from "./SectionMovieStyle";

import { H2IrStyle } from "../../shared/H2IrStyle";

export default function SectionMovieBoxoffice() {
  return (
    <SectionMovieStyle>
      <H2IrStyle>영화 순위</H2IrStyle>
      <UlStyle>
        {useContext(boxOfficeData).map(
          ({ id, 제목, 개요, 이미지, 개봉, 출연, 평점 }) => (
            <Poster
              key={id}
              제목={제목}
              개요={개요}
              이미지={이미지}
              개봉={개봉}
              출연={출연}
              평점={평점}
            />
          )
        )}
      </UlStyle>
    </SectionMovieStyle>
  );
}
