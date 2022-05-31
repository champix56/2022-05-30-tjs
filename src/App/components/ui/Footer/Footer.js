import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Footer.module.css";
const initialState = {};
const Footer = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log("Footer monté");
  }, []);
  return (
    <div className={style.Footer} data-testid="Footer">
      footer
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
