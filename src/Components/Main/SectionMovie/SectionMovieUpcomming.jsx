import React, { useContext } from "react";
import { upcommingData } from "../../../data";
import Poster from "./Poster/Poster";
import { SectionMovieStyle, UlStyle } from "./SectionMovieStyle";

import { H2IrStyle } from "../../shared/H2IrStyle";

export default function SectionMovieUpcomming() {
  return (
    <SectionMovieStyle>
      <H2IrStyle>개봉예정영화</H2IrStyle>
      <UlStyle>
        {useContext(upcommingData).map(
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
