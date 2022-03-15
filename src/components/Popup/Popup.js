import {
  PopupContainer,
  Head,
  Description,
  ButtonWrapper,
  ButtonOne,
  ButtonTwo,
  CloseIcon,
  CloseIconWrapper,
  SuccessIcon,
  ErrorIcon,
  AlertIcon,
  IconBackground,
  ContactWrapper,
} from "./Popup.styled";
import PropTypes from "prop-types";
import Input from "../Input/Input";
import Select from "../Select/Select";

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
    <PopupContainer popupState={popupState}>
      <CloseIconWrapper>
        <CloseIcon
          onClick={(e) => {
            handleClose(e);
          }}
        ></CloseIcon>
      </CloseIconWrapper>
      {popupState !== "contact" && (
        <IconBackground popupState={popupState}>
          {popupState === "alert" && <AlertIcon />}
          {popupState === "success" && <SuccessIcon />}
          {popupState === "error" && <ErrorIcon />}
        </IconBackground>
      )}
      <Head popupState={popupState}>{head}</Head>
      <Description popupState={popupState}>{description}</Description>
      {popupState === "contact" && (
        <ContactWrapper>
          <Input inputState="readonly" label="Your name"></Input>
          <Input inputState="readonly" label="Your phone"></Input>
          <Select
            label="Your country"
            results={["USA", "Canada", "Germany"]}
          ></Select>
        </ContactWrapper>
      )}
      {!(popupState === "error") && (
        <ButtonWrapper>
          <ButtonOne onClick={(e) => handleButton1(e)}>
            {buttonOneLabel}
          </ButtonOne>
          {popupState === "alert" && (
            <ButtonTwo onClick={(e) => handleButton2(e)}>
              {buttonTwoLabel}
            </ButtonTwo>
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
