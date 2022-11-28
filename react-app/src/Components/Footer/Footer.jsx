import React from "react";
import {
  FooterStyle,
  SectionContactStyle,
  SectionInfoStyle,
  FooterImgStyle,
} from "./FooterStyle";

export default function Footer() {
  const twitter = "img/twitter.png";
  const instagram = "img/instagram.png";
  const facebook = "img/facebook.png";
  return (
    <FooterStyle>
      <SectionContactStyle>
        <h2 tabindex="0">Jungle Cinema</h2>
        <ul>
          <li>
            <a href="">
              <FooterImgStyle src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <FooterImgStyle src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <FooterImgStyle src={facebook} alt="" />
            </a>
          </li>
        </ul>
      </SectionContactStyle>
      <SectionInfoStyle>
        <h2 class="ir">정글시네마 주소</h2>
        <address>
          <p tabindex="0">
            <strong>(주) 정글시네마</strong>
          </p>

          <p tabindex="0">
            <strong>대표</strong> 라이언
          </p>

          <p tabindex="0">
            <strong>사업자번호</strong> 000-0000-0000
          </p>

          <p tabindex="0">광고 영화 및 비디오물 제작업</p>

          <p tabindex="0">
            <strong>주소</strong> 서울특별시
          </p>
        </address>
        <p>© TheJungle</p>
      </SectionInfoStyle>
    </FooterStyle>
  );
}
