import React from "react";
import { ButtonWrapper } from "./style";

export function Btn({ children, long, color, onClick }) {
  return (
    <ButtonWrapper long={long} color={color} onClick={onClick}>
      {children}
    </ButtonWrapper>
  );
}
