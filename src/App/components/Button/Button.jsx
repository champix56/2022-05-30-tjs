import React from "react";
import PropTypes from "prop-types";
function Button(props) {
  console.log(props);
  return <button type={props.type}>{props.children}</button>;
}


export default Button;