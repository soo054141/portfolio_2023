import React from "react";
import { Container } from "../../components/Container";
import { TitleWrap } from "./style";
import { NameWrap } from "../../components/NameWrap";

function Header() {
  return (
    <Container>
      <TitleWrap>
        <h3>2022</h3>
        <h1>Portfolio</h1>
      </TitleWrap>
      <NameWrap>
        <h2>김유림</h2>
        <h4>KIM YURIM</h4>
        <h5>soo054141@gmail.com</h5>
        <h6>
          <a href="https://github.com/soo054141">
            https://github.com/soo054141
          </a>
        </h6>
      </NameWrap>
    </Container>
  );
}

export default Header;
