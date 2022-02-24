import React from "react";
import PropTypes from "prop-types";
import { InputWrapper } from "./style";

function Input({ placeholder, inputType, onChangeCallback, value }) {
  return (
    <InputWrapper
      value={value}
      onChange={onChangeCallback}
      inputType={inputType}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
  placeholder: "입력해 주세요.",
  inputType: "number",
};

Input.propTypes = {
  placeholder: PropTypes.string,
  inputType: PropTypes.string,
  onChangeCallback: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Input;
