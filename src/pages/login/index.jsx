import React from "react";
import PropTypes from "prop-types";
import { Container } from "../../components/Container";
import InfoWrap from "../../components/InfoWrap";
import PreviewWrap from "../../components/PreviewWrap";
import loginImg from "../../asset/images/login_page.png";

function Login({ title, subTitle, year, team, stack, detail, view, repo }) {
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
      <PreviewWrap>
        <a href={view}>
          <img src={loginImg} alt="gitfarm" />
        </a>
      </PreviewWrap>
    </Container>
  );
}

Login.defaultProps = {
  title: "회원가입, 로그인 페이지",
  subTitle: "Login Page",
  year: 2021,
  team: "개인",
  stack: "ReactJS, React Hooks API, styled-components",
  detail: [
    "회원가입, 로그인, 로그아웃 기능을 구현한 프로젝트",
    "",
    "로컬 스토리지와 세션 스토리지를 DB처럼 이용하여",
    "회원가입 및 로그아웃 기능을 구현한 프로젝트입니다.",
  ],
  view: "https://soo054141.github.io/Login/",
  repo: "https://github.com/soo054141/Login",
};

Login.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  year: PropTypes.number,
  team: PropTypes.string,
  stack: PropTypes.string,
  detail: PropTypes.arrayOf(PropTypes.string),
  view: PropTypes.string,
  repo: PropTypes.string,
};
export default Login;
