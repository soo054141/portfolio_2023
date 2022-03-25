import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../components/Container";
import InfoWrap from "../../components/InfoWrap";
import PreviewWrap from "../../components/PreviewWrap";
import animal from "../../asset/images/animal.gif";

function Pet({
  leftSideImg,
  title,
  subTitle,
  year,
  team,
  stack,
  detail,
  view,
  repo,
}) {
  return (
    <Container leftSideImg={leftSideImg}>
      <PreviewWrap>
        <a href={view}>
          <img src={animal} alt="animal" />
        </a>
      </PreviewWrap>
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
    </Container>
  );
}

Pet.defaultProps = {
  leftSideImg: true,
  title: "유기동물 정보 커뮤니티",
  subTitle: "반려in",
  year: 2022,
  team: "Front - 4명/ Back - 2명",
  stack: "JavaScript, CSS3, HTML5, Node.js",
  detail: [
    "유기동물 입양 정보 획득 및 반려 동물 정보 공유와 소통이 가능한 커뮤니티",
    "",
    "유기동물 공공 API를 이용하여 현재 보호중인",
    "동물의 현황 및 통계를 확인할 수 있습니다.",
    "입양한 반려동물과 함께 하는 일상을 공유하거나, 입양을 원하는",
    "유저간의 정보 공유가 가능한 게시판 기능이 있습니다.",
  ],
  view: "https://elice3.herokuapp.com/",
  repo: "https://github.com/soo054141/pet-project",
};

Pet.propTypes = {
  leftSideImg: PropTypes.bool,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  year: PropTypes.number,
  team: PropTypes.string,
  stack: PropTypes.string,
  detail: PropTypes.arrayOf(PropTypes.string),
  view: PropTypes.string,
  repo: PropTypes.string,
};

export default Pet;
