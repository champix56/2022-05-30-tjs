import React from "react";
import PropTypes from "prop-types";
import style from "./Button.module.css";
function Button(props) {
  return (
    <button
      className={style.Button+(props.className?' '+props.className:'')}
      type={props.type}
      style={{...props.style, backgroundColor: props.bgColor, color: props.color }}
    >
      {props.children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string.isRequired,
  action: PropTypes.func,
  children: PropTypes.any.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  className : PropTypes.string,
  style: PropTypes.object,
};

Button.defaultProps = {
  type: "button",
  bgColor: "lime",
  color: "white",
};
export default Button;
export function DefaultButton(props) {
    return (
      <Button {...props} bgColor='skyblue'></Button>
    )
  } 
  export function WarningButton(props) {
      return (
        <Button {...props} bgColor='tomato'></Button>
      )
    } 
  