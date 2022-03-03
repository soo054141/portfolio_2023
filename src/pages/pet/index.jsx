import React from "react";
import { Container } from "../../components/Container";
import InfoWrap from "../../components/InfoWrap";
import PreviewWrap from "../../components/PreviewWrap";

function Pet() {
  return (
    <Container>
      <InfoWrap title="유기동물 정보 커뮤니티" />
      <PreviewWrap></PreviewWrap>
    </Container>
  );
}

export default Pet;
