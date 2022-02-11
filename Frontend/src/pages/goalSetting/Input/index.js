import React from "react";
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

export default Input;
