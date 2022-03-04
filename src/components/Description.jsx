import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 590px;
`;

const SubHead = styled.div`
  font-weight: bold;
  font-size: 1.9rem;
  margin-bottom: 1.9rem;
`;

const Content = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.lightGray};
`;

function Description({ subheading, content, date }) {
  return (
    <Wrapper>
      <SubHead>{subheading}</SubHead>
      <Content>{content}</Content>
    </Wrapper>
  );
}

Description.defaultProps = {
  subheading: "#원활한 소통 능력",
  content:
    "원활한 의사소통 능력을 지녀야 좋은 개발자가 될 수 있다고 생각합니다. 개발자라는 직업에 대해 흔히들 ‘혼자 일해도 되는 직업’이라고 오해하는 경향이 있습니다. 물론 혼자서 결과를 잘 만들어내는 능력도 중요하겠지만, 문제 해결 방법을 빠르게 찾아 주어진 기한 내에 실행할 수 있도록 동료와 원만하게 소통할 줄 아는 능력도 중요하다고 생각합니다. 전공 특성상 빈번하게 이뤄졌던 팀 프로젝트 경험으로 갈등을 조정하는 방법과 배려를 기반으로 한 의사소통 능력을 길러냈습니다. 디자인과 마케팅을 배웠던 전공 지식으로 실무에서 기획자나 디자이너가 원하는 것을 남들보다 빠르고 정확하게 이해할 수도 있을 것입니다.",
};

Description.propTypes = {
  subheading: PropTypes.string,
  content: PropTypes.string,
};
export default Description;
