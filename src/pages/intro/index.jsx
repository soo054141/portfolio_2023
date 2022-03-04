import React from "react";
import { IntroContainer } from "./style";
import { MyInfo } from "../../components/MyInfo";
import Description from "../../components/Description";

function Intro() {
  return (
    <IntroContainer>
      <MyInfo>
        <h2>김유림</h2>
        <h4>KIM YURIM</h4>
      </MyInfo>
      <div>
        <div>
          <div>소개</div>
          <Description />
        </div>
        <div>
          <div>활동</div>
          <Description />
        </div>
      </div>
    </IntroContainer>
  );
}

export default Intro;
