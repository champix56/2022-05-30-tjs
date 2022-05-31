import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./Navbar.module.css";
const initialState = {};
const Navbar = (props) => {
  const [state, setstate] = useState(initialState);
  useEffect(() => {
    console.log("Navbar monté");
  }, []);
  return (
    <div className={style.Navbar} data-testid="Navbar">
      navbar
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
