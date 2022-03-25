import React from "react";
import { BgWrapper } from "../../components/BgWrapper";
import { Message, Contact } from "./style";

export default function Footer() {
  return (
    <BgWrapper>
      <Message>
        <h2>Thank you for watching</h2>
        <p>여기까지 봐주셔서 감사합니다</p>
        <p>
          성장하는 FE개발자 <span>김유림</span>입니다
        </p>
      </Message>
      <Contact>
        <h3>Contact</h3>
        <p>soo054141@gmail.com</p>
      </Contact>
    </BgWrapper>
  );
}
