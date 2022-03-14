import React from "react";
import PropTypes from "prop-types";
import { ButtonField, Label, AddIcon, RefreshIcon } from "./Button.styled";

const Button = ({
  buttonType,
  label,
  disabledState,
  loadingState,
  handleClick,
}) => {
  return (
    <ButtonField
      onClick={handleClick}
      loadingState={loadingState}
      disabled={disabledState}
      buttonType={buttonType}
    >
      {loadingState ? (
        <RefreshIcon />
      ) : (
        <>
          {buttonType === "iconLabel" && (
            <>
              <AddIcon buttonType={buttonType} />
              <Label className="label">{label}</Label>
            </>
          )}
          {(buttonType === "icon" || buttonType === "iconCircle") && (
            <AddIcon buttonType={buttonType} />
          )}
          {buttonType === "label" && <Label>{label}</Label>}
        </>
      )}
    </ButtonField>
  );
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(["icon", "label", "iconLabel", "iconCircle"]),
  label: PropTypes.string,
  disabledState: PropTypes.bool,
  loadingState: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
