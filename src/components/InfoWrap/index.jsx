import React from "react";
import PropTypes from "prop-types";
import * as Info from "./style";

function InfoWrap({ title }) {
  return (
    <Info.Wrapper>
      <Info.Title>{title}</Info.Title>
    </Info.Wrapper>
  );
}

InfoWrap.defaultProps = {
  title: "",
};

InfoWrap.propTypes = {
  title: PropTypes.string,
};

export default InfoWrap;
