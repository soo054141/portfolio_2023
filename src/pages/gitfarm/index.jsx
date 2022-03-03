import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../components/Container";
import InfoWrap from "../../components/InfoWrap";
import PreviewWrap from "../../components/PreviewWrap";
import gitfarm from "../../asset/images/gitfarm.png";

function GitFarm({
  title,
  subTitle,
  year,
  team,
  stack,
  detail,
  view,
  repo,
  mobile,
}) {
  return (
    <Container>
      <InfoWrap
        title={title}
        subTitle={subTitle}
        year={year}
        team={team}
        stack={stack}
        detail={detail}
        view={view}
        repo={repo}
      />
      <PreviewWrap mobile={mobile}>
        <a href="">
          <img src={gitfarm} alt="gitfarm" />
        </a>
      </PreviewWrap>
    </Container>
  );
}

GitFarm.defaultProps = {
  title: "Git 잔디 관리 서비스",
  subTitle: "Git Farm",
  year: 2022,
  team: "Front - 3명/ Back - 2명",
  stack: "ReactJS, React Hooks API, styled-components",
  detail: [
    "Git 잔디 관리를 즐겁고 꾸준하게 할 수 있도록 장려하고 도와주는 서비스",
    "기존 GitHub 페이지에서 제공하는 잔디 그래프 형태 대신에,",
    "캘린더와 차트 형태로 데이터를 시각화하여 제공하기 때문에",
    "유저는 데이터를 좀 더 쉽게 파악하고 분석할 수 있습니다.",
    "커밋 수에 따라 채워지는 농장 꾸미기, 랭킹 시스템, 배지 획득 등의",
    "다양한 기능으로 게임하는 듯한 재미와 성취감을 느낄 수 있게 하였습니다.",
    "랭킹 시스템을 도입하여 유저들간의 선의의 경쟁을 유도할 수 있게 하였습니다.",
  ],
  view: "https://elice-kdt-sw-1st-team1.elicecoding.com/",
  repo: "https://elice-kdt-sw-1st-team1.elicecoding.com/",
  mobile: true,
};

GitFarm.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  year: PropTypes.number,
  team: PropTypes.string,
  stack: PropTypes.string,
  detail: PropTypes.arrayOf(PropTypes.string),
  view: PropTypes.string,
  repo: PropTypes.string,
  small: PropTypes.bool,
};
export default GitFarm;
