import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";
function Button(props) {
  return (
    <button className={style.Button} type={props.type}>
      {props.children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func,
  children: PropTypes.any.isRequired,
};

Button.defaultProps = {
  type: "button",
};
export default Button;
