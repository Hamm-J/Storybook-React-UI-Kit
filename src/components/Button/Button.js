import React from "react";
import PropTypes from "prop-types";
import {
  ButtonContainer,
  ContentWrapper,
  ButtonField,
  Label,
  AddIcon,
  RefreshIcon,
} from "./Button.styled";

const Button = ({
  buttonType,
  label,
  disabledState,
  loadingState,
  backgroundColor = "#6E41E2",
  fontColor = "white",
  handleClick,
}) => {
  return (
    <ButtonContainer>
      <ButtonField
        onClick={handleClick}
        loadingState={loadingState}
        disabled={disabledState}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
      >
        {loadingState ? (
          <RefreshIcon />
        ) : (
          <ContentWrapper>
            {buttonType === "iconLabel" && (
              <>
                <AddIcon />
                <Label className="label">{label}</Label>
              </>
            )}
            {buttonType === "icon" && <AddIcon />}
            {buttonType === "label" && <Label>{label}</Label>}
          </ContentWrapper>
        )}
      </ButtonField>
    </ButtonContainer>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(["icon", "label", "iconLabel"]),
  label: PropTypes.string,
  disabledState: PropTypes.bool,
  loadingState: PropTypes.bool,
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
};

export default Button;
