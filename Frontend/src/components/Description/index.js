import React from "react";
import { Text } from "./style";
export function Description({ children, big }) {
  return <Text big={big}>{children}</Text>;
}
