import styled from "styled-components";
import { Close, Done, PriorityHigh } from "@styled-icons/material";

export const PopupContainer = styled.div`
  width: ${(props) =>
    props.popupState === "contact" ? "fit-content" : "480px"};
  border-radius: 8px;
  box-shadow: ${(props) => props.theme.shadowDefault};
  box-sizing: border-box;
  padding: 29px 25px;
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-start;
  align-items: flex-start; */

  justify-content: ${(props) =>
    props.popupState === "contact" ? "flex-start" : "center"};
  align-items: ${(props) =>
    props.popupState === "contact" ? "flex-start" : "center"};
  gap: 10px;
`;

export const Head = styled.h1`
  font: ${(props) => props.theme.fontHeading4};
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  inline-size: 290px;
  text-align: ${(props) =>
    props.popupState === "contact" ? "start" : "center"};
`;

export const Description = styled.p`
  font: ${(props) => props.theme.fontParagraph2};
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  inline-size: 290px;
  text-align: ${(props) =>
    props.popupState === "contact" ? "start" : "center"};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const ButtonOne = styled.button`
  background-color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.colorPrimary};
  padding: 10px;
  border-radius: 4px;
  font: ${(props) => props.theme.fontParagraph2};
  color: ${(props) => props.theme.colorWhite};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colorHover};
  }

  &:active {
    background-color: ${(props) => props.theme.colorActive};
  }
`;
export const ButtonTwo = styled.button`
  background-color: ${(props) => props.theme.colorWhite};
  border: 2px solid ${(props) => props.theme.colorPrimary};
  padding: 10px;
  border-radius: 4px;
  font: ${(props) => props.theme.fontParagraph2};
  color: ${(props) => props.theme.colorPrimary};
  cursor: pointer;

  &:hover {
    background-color: rgba(110, 65, 226, 0.04);
  }

  &:active {
    background-color: rgba(110, 65, 226, 0.16);
  }
`;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  background-color: ${(props) => props.theme.colorPrimary};
  border: 2px solid ${(props) => props.theme.colorPrimary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  color: ${(props) => props.theme.colorWhite};
  width: 50%;
  cursor: pointer;
`;

export const SuccessIcon = styled(Done)`
  color: ${(props) => props.theme.colorGreen};
  width: 60%;
`;

export const ErrorIcon = styled(Close)`
  color: ${(props) => props.theme.colorSuperRed};
  width: 60%;
`;

export const AlertIcon = styled(PriorityHigh)`
  color: ${(props) => props.theme.colorStar};
  width: 60%;
`;

export const IconBackground = styled.div`
  background-color: ${(props) => {
    switch (props.popupState) {
      case "alert":
        return (props) => props.theme.colorYellow;
      case "success":
        return (props) => props.theme.colorGreenLight;
      case "error":
        return (props) => props.theme.colorRedGirl;
      case "contact":
        return "white";
      default:
        return "white";
    }
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 96px;
  height: 96px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 24px;
  margin-bottom: 24px;
`;
