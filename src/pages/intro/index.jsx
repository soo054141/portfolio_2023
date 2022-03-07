import React from "react";
import {
  IntroContainer,
  ActivitiesWrap,
  ActivitiesTitle,
  ActivitiesContent,
} from "./style";
import { MyInfo } from "../../components/MyInfo";
import Description from "../../components/Description";

function Intro() {
  const myInfomation = [
    {
      subheading: "#원활한 소통 능력",
      content:
        "원활한 의사소통 능력을 지녀야 좋은 개발자가 될 수 있다고 생각합니다. 개발자라는 직업에 대해 흔히들 ‘혼자 일해도 되는 직업’이라고 오해하는 경향이 있습니다. 물론 혼자서 결과를 잘 만들어내는 능력도 중요하겠지만, 문제 해결 방법을 빠르게 찾아 주어진 기한 내에 실행할 수 있도록 동료와 원만하게 소통할 줄 아는 능력도 중요하다고 생각합니다. 전공 특성상 빈번하게 이뤄졌던 팀 프로젝트 경험으로 갈등을 조정하는 방법과 배려를 기반으로 한 의사소통 능력을 길러냈습니다. 디자인과 마케팅을 배웠던 전공 지식으로 실무에서 기획자나 디자이너가 원하는 것을 남들보다 빠르고 정확하게 이해할 수도 있을 것입니다.",
    },
    {
      subheading: "#새로운 것을 두려워하지 않는 도전정신",
      content:
        "개발자라면 새로운 것을 두려워하지 않는 도전정신을 갖춰야 한다고 생각합니다. 매년 새로운 언어와 기술이 쏟아지는데, 습득하는 것이 싫다고 계속 오래된 기술을 고집한다면 좋은 개발자가 될 수 없다고 생각합니다. 저는 학부 시절 듣고 싶은 강의가 있다면 그게 난도가 높은 타 전공과목이더라도 수강했고, 창업대회에 도전하여 정부지원금을 받은 경험도 있습니다. 퍼블리셔로 일할 기회가 있었지만, 자바스크립트를 깊게 이해하고자 공부하는 것을 택했고 거기에 그치지 않고 현재는 리액트를 공부하고 있습니다.",
    },
  ];

  const myActivities = [
    {
      subheading: "엘리스 SW Engineer Track",
      content:
        "엘리스 SW Engineer Track에서 웹 프론트엔드 과정에 필요한 JavaScript, React.js, node.js 등 학습",
      date: "2021-10 ~ 2022-02",
    },
    {
      subheading: "이노베이션 아카데미 42 seoul La piscine",
      content:
        "이노베이션 아카데미의 SW 프로그램인 1개월 집중교육(La Piscine) 과정 참여, 리눅스 환경으로 셸 스크립트와 C언어를 경험",
      date: "2020-11 ~ 2020-12",
    },
    {
      subheading: "오프라인 스터디 활동",
      content:
        "React를 익히고 이용하여 개인 프로젝트 제작, JavaScript의 자료구조와 알고리즘을 공부하는 소규모 스터디 운영 및 활동",
      date: "2020-03 ~ 2020-09",
    },
  ];

  return (
    <IntroContainer>
      <MyInfo>
        <h2>김유림</h2>
        <h4>KIM YURIM</h4>
      </MyInfo>
      <ActivitiesWrap>
        <ActivitiesTitle>소개</ActivitiesTitle>
        <ActivitiesContent>
          {myInfomation.map((el, i) => {
            return (
              <Description
                key={i}
                subheading={el.subheading}
                content={el.content}
              />
            );
          })}
        </ActivitiesContent>
        <ActivitiesTitle>활동</ActivitiesTitle>
        <ActivitiesContent>
          {myActivities.map((el, i) => {
            return (
              <Description
                key={i}
                subheading={el.subheading}
                content={el.content}
                date={el.date}
              />
            );
          })}
        </ActivitiesContent>
      </ActivitiesWrap>
    </IntroContainer>
  );
}

export default Intro;
