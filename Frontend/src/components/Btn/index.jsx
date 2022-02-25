import React from "react";
import PropTypes from "prop-types";
import { ButtonWrapper } from "./style";

function Btn({ children, long, color, onClick }) {
  return (
    <ButtonWrapper long={long} color={color} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}
Btn.defaultProps = {
  long: false,
  color: "white",
};
Btn.propTypes = {
  children: PropTypes.string.isRequired,
  long: PropTypes.bool,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Btn;
