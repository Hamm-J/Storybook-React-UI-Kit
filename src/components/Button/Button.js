import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from "./Button.styled";

const Button = ({
    label,
    btnSize = "md",
    fontSize = 16,
    fontColor = "white",
    backgroundColor = "blueviolet",
    handleClick,
  }) => {
  
    let scale = 1;
    if (btnSize === "sm") scale = 0.3;
    if (btnSize === "lg") scale = 1.5;
    if (btnSize === "xl") scale = 2.5;
  
    return (
      <div>
        <ButtonStyled 
        // FIXME: JH2021_12_11
        // onClick is causing StoryBook args to strip styles

        // onClick={handleClick}
        backgroundColor={backgroundColor}
        fontSize={fontSize}
        scale={scale}
        fontColor={fontColor}
        >
            {label}
        </ButtonStyled>
     </div>
    );
  };
  
  Button.propTypes = {
    label: PropTypes.string,
    fontColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    fontSize: PropTypes.number,
    btnSize: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
    handleClick: PropTypes.func,
  };
  
  export default Button;
  