import React from "react";
import PropTypes from "prop-types";
import {
  ButtonContentWrapperStyled,
  ButtonStyled,
  ButtonLabelStyled,
  AddIconStyled,
  RefreshIconStyled,
} from "./Button.styled";

const Button = ({
  buttonType = "iconLabel",
  label,
  disabledState = false,
  loadingState = false,
  backgroundColor = "#6E41E2",
  fontColor = "white",
  handleClick,
}) => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  let cursorState;
  cursorState = loadingState
    ? (cursorState = "wait")
    : (cursorState = "pointer");

  // * return different versions of the button depending on buttonType
  switch (buttonType) {
    case "iconLabel":
      return (
        <div style={styles}>
          <ButtonStyled
            // FIXME: JH2021_12_11
            // onClick is causing StoryBook args to strip styles
            // onClick={handleClick}
            cursorState={cursorState}
            disabled={disabledState}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
          >
            {loadingState ? (
              <RefreshIconStyled />
            ) : (
              <ButtonContentWrapperStyled>
                <AddIconStyled />
                <ButtonLabelStyled>{label}</ButtonLabelStyled>
              </ButtonContentWrapperStyled>
            )}
          </ButtonStyled>
        </div>
      );

    case "label":
      return (
        <div style={styles}>
          <div style={styles}>
            <ButtonStyled
              // FIXME: JH2021_12_11
              // onClick is causing StoryBook args to strip styles
              // onClick={handleClick}
              cursorState={cursorState}
              disabled={disabledState}
              fontColor={fontColor}
              backgroundColor={backgroundColor}
            >
              {loadingState ? (
                <RefreshIconStyled />
              ) : (
                <ButtonContentWrapperStyled>
                  <ButtonLabelStyled>{label}</ButtonLabelStyled>
                </ButtonContentWrapperStyled>
              )}
            </ButtonStyled>
          </div>
        </div>
      );

    case "icon":
      return (
        <div style={styles}>
          <div style={styles}>
            <ButtonStyled
              // FIXME: JH2021_12_11
              // onClick is causing StoryBook args to strip styles
              // onClick={handleClick}
              cursorState={cursorState}
              disabled={disabledState}
              fontColor={fontColor}
              backgroundColor={backgroundColor}
            >
              {loadingState ? <RefreshIconStyled /> : <AddIconStyled />}
            </ButtonStyled>
          </div>
        </div>
      );
  }
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(["icon", "label", "iconLabel"]),
  label: PropTypes.string,
  disabledState: PropTypes.bool,
  loadingState: PropTypes.bool,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Button;
