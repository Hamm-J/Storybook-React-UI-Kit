import {
  PopupContainer,
  Head,
  Description,
  ButtonMain,
  ButtonSecondary,
  ButtonWrapper,
  CloseIcon,
  CloseIconWrapper,
  SuccessIcon,
  ErrorIcon,
  AlertIcon,
  IconBackground,
} from "./Popup.styled";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const Popup = ({
  popupState,
  head,
  description,
  buttonOneLabel,
  buttonTwoLabel,
  handleClose,
  handleButton1,
  handleButton2,
}) => {
  return (
    <PopupContainer>
      <CloseIconWrapper>
        <CloseIcon
          onClick={(e) => {
            handleClose(e);
          }}
        ></CloseIcon>
      </CloseIconWrapper>
      <IconBackground popupState={popupState}>
        {popupState === "alert" && <AlertIcon />}
        {popupState === "success" && <SuccessIcon />}
        {popupState === "error" && <ErrorIcon />}
        {popupState === "contact" && <></>}
      </IconBackground>
      <Head>{head}</Head>
      <Description>{description}</Description>
      {!(popupState === "error") && (
        <ButtonWrapper>
          <Button
            buttonType="label"
            label={buttonOneLabel}
            onClick={(e) => handleButton1(e)}
          ></Button>
          {popupState === "alert" && (
            <Button
              buttonType="label"
              label={buttonTwoLabel}
              onClick={(e) => handleButton2(e)}
            ></Button>
          )}
        </ButtonWrapper>
      )}
    </PopupContainer>
  );
};

Popup.propTypes = {
  popupState: PropTypes.oneOf(["alert", "success", "error", "contact"]),
  head: PropTypes.string,
  description: PropTypes.string,
  buttonOneLabel: PropTypes.string,
  buttonTwoLabel: PropTypes.string,
};

export default Popup;
