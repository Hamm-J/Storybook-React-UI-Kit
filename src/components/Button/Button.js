import React from "react";
import PropTypes from "prop-types";
import {
  ButtonContentWrapper,
  ButtonField,
  ButtonLabel,
  AddIcon,
  RefreshIcon,
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
          <ButtonField
            // FIXME: JH2021_12_11
            // onClick is causing StoryBook args to strip styles
            // onClick={handleClick}
            cursorState={cursorState}
            disabled={disabledState}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
          >
            {loadingState ? (
              <RefreshIcon />
            ) : (
              <ButtonContentWrapper>
                <AddIcon />
                <ButtonLabel>{label}</ButtonLabel>
              </ButtonContentWrapper>
            )}
          </ButtonField>
        </div>
      );

    case "label":
      return (
        <div style={styles}>
          <ButtonField
            // FIXME: JH2021_12_11
            // onClick is causing StoryBook args to strip styles
            // onClick={handleClick}
            cursorState={cursorState}
            disabled={disabledState}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
          >
            {loadingState ? (
              <RefreshIcon />
            ) : (
              <ButtonContentWrapper>
                <ButtonLabel>{label}</ButtonLabel>
              </ButtonContentWrapper>
            )}
          </ButtonField>
        </div>
      );

    case "icon":
      return (
        <div style={styles}>
          <ButtonField
            // FIXME: JH2021_12_11
            // onClick is causing StoryBook args to strip styles
            // onClick={handleClick}
            cursorState={cursorState}
            disabled={disabledState}
            fontColor={fontColor}
            backgroundColor={backgroundColor}
          >
            {loadingState ? <RefreshIcon /> : <AddIcon />}
          </ButtonField>
        </div>
      );
    default:
      <div>switch default</div>;
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
