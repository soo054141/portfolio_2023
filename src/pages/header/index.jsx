import React from "react";
import { Container } from "../../components/Container";
import * as Head from "./style";

function Header() {
  return (
    <Container>
      <Head.TitleWrapper>
        <h3>2022</h3>
        <h1>Portfolio</h1>
      </Head.TitleWrapper>
      <Head.InfoWrapper>
        <h2>김유림</h2>
        <h4>KIM YURIM</h4>
        <h5>soo054141@gmail.com</h5>
        <h6>
          <a href="https://github.com/soo054141">
            https://github.com/soo054141
          </a>
        </h6>
      </Head.InfoWrapper>
    </Container>
  );
}

export default Header;
