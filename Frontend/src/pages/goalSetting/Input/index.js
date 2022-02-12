import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./style";

function Input({ placeholder, type, onChangeCallback }) {
  const inputType = type === 0 ? "number" : "text";

  return (
    <InputWrapper
      onChange={onChangeCallback}
      type={inputType}
      placeholder={placeholder}
    />
  );
}
Input.defaultProps = {
  placeholder: "입력해 주세요.",
  type: 0,
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.number,
  onChangeCallback: PropTypes.func.isRequired,
};

export default Input;
