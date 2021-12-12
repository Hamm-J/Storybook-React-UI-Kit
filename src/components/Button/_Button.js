import React from "react";
import PropTypes from "prop-types";

const Button = ({
  label,
  btnSize = "md",
  textSize = 16,
  color = "white",
  backgroundColor = "blueviolet",
  handleClick,
}) => {

  let scale = 1;
  if (btnSize === "sm") scale = 0.3;
  if (btnSize === "lg") scale = 1.5;
  if (btnSize === "xl") scale = 2.5;

  const styles = {
    border: "none",
    fontSize: `${textSize}px`,
    backgroundColor,
    color,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
  };

  return (
    <div>
      <button onClick={handleClick} style={styles}>{label}</button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  textSize: PropTypes.number,
  btnSize: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  backgroundColor: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
