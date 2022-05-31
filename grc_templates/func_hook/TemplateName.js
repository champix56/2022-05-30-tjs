import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./TemplateName.module.css";
const initialState = {};
const TemplateName = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log("TemplateName monté");
  }, []);
  return (
    <div className={style.TemplateName} data-testid="TemplateName">
      templateName
    </div>
  );
};

TemplateName.propTypes = {};

export default TemplateName;
