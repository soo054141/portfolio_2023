import React from "react";
import PropTypes from "prop-types";
import * as Info from "./style";

function InfoWrap({ title, subTitle, year, team, stack, detail, view, repo }) {
  return (
    <Info.Wrapper>
      <Info.Title>{title}</Info.Title>
      <Info.SubTitle>[{subTitle}]</Info.SubTitle>
      <Info.StackWrapper>
        <Info.Stacks>
          <Info.StackTitle>제작연도</Info.StackTitle>
          <Info.StackContent>{year}</Info.StackContent>
        </Info.Stacks>
        <Info.Stacks>
          <Info.StackTitle>팀구성</Info.StackTitle>
          <Info.StackContent>{team}</Info.StackContent>
        </Info.Stacks>
        <Info.Stacks>
          <Info.StackTitle>사용기술</Info.StackTitle>
          <Info.StackContent>{stack}</Info.StackContent>
        </Info.Stacks>
      </Info.StackWrapper>
      <Info.DetailWrapper>
        <Info.DetailTitle>상세설명</Info.DetailTitle>
        {detail &&
          detail.map((txt: string, i: React.Key) => {
            return (
              <Info.DetailContent key={i}>
                {txt}
                <br />
              </Info.DetailContent>
            );
          })}
      </Info.DetailWrapper>
      {view && (
        <Info.DetailWrapper>
          <Info.DetailTitle>View</Info.DetailTitle>
          <Info.DetailContent>
            <a href={view}>{view}</a>
          </Info.DetailContent>
        </Info.DetailWrapper>
      )}
      {repo && (
        <Info.DetailWrapper>
          <Info.DetailTitle>Repo</Info.DetailTitle>
          <Info.DetailContent>
            <a href={repo}>{repo}</a>
          </Info.DetailContent>
        </Info.DetailWrapper>
      )}
    </Info.Wrapper>
  );
}

InfoWrap.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  year: PropTypes.number,
  team: PropTypes.string,
  stack: PropTypes.string,
  detail: PropTypes.arrayOf(PropTypes.string),
  view: PropTypes.string,
  repo: PropTypes.string,
};

export default InfoWrap;
