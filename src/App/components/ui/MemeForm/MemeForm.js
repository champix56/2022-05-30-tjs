import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeForm.module.css";
const initialState = {};
const MemeForm = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log("MemeForm monté");
  }, []);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      memeForm
    </div>
  );
};

MemeForm.propTypes = {};

export default MemeForm;
