import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div``;

const SubHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.9rem;
`;

const Subheading = styled.div`
  font-weight: bold;
  font-size: 1.9rem;
`;

const Date = styled.div`
  font-size: 1.6rem;
  color: #98a8b9;
`;
const Content = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.lightGray};
`;

function Description({ subheading, content, date }) {
  return (
    <Wrapper>
      <SubHead>
        <Subheading>{subheading}</Subheading>
        {date && <Date>{date}</Date>}
      </SubHead>
      <Content>{content}</Content>
    </Wrapper>
  );
}

Description.defaultProps = {
  subheading: "",
  content: "",
  date: "",
};

Description.propTypes = {
  subheading: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};

export default Description;
