import React from "react";
import PropTypes from "prop-types";
function Button(props) {
  console.log(props);
  return <button type={props.type}>{props.children}</button>;
}
Button.propTypes = {
    type: PropTypes.string.isRequired,
    action: PropTypes.func,
    children: PropTypes.any.isRequired,
};

Button.defaultProps={
    type:'button'
};
export default Button;