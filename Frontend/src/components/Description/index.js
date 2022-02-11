import React from "react";
import PropTypes from "prop-types";
import { Text } from "./style";

function Description({ children, big }) {
  return <Text big={big}>{children}</Text>;
}

Description.propTypes = {
  children: PropTypes.element.isRequired,
  big: PropTypes.bool.isRequired,
};
export default Description;
