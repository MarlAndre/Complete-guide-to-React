import React from "react";
import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      className={classes.button} // Styling
      type={props.type || "button"} // Provide a fallback
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}

export default Button;
