import styled, { keyframes } from "styled-components";
import { Add, Refresh } from "@styled-icons/material";

export const Label = styled.span`
  font: ${(props) => props.theme.fontParagraph2};
`;

export const AddIcon = styled(Add)`
  width: 25px;
  margin-right: ${(props) => (props.buttonType === "iconLabel" ? "7px" : "0")};
`;

const RefreshIconAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;
export const RefreshIcon = styled(Refresh)`
  width: 25px;
  animation-name: ${RefreshIconAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;

// handle the min-width of ButtonType depending on buttonType
const handleButtonFieldMinWidth = (buttonType) => {
  switch (buttonType) {
    case "iconLabel":
      return "124px";
    case "icon":
      return "46px";
    case "label":
      return "96px";
    case "iconCircle":
      return "44px";
    default:
      return "100px";
  }
};

export const ButtonField = styled.button`
  box-sizing: border-box;
  padding: 10px 10px 10px 10px;
  min-height: 46px;
  min-width: ${(props) => handleButtonFieldMinWidth(props.buttonType)};

  outline: none;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => props.theme.borderColor};
  border-radius: ${(props) =>
    props.buttonType === "iconCircle" ? "100%" : "4px"};
  cursor: ${(props) => (props.loadingState ? "wait" : "pointer")};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  box-shadow: ${(props) => props.theme.boxShadow};

  &:hover {
    background-color: ${(props) => props.theme.backgroundColorHover};
    transition: all 200ms;
  }
  &:active {
    background-color: ${(props) => props.theme.backgroundColorActive};
    transition: all 200ms;
  }
  &:focus {
    border-style: solid;
    border-width: 2px;
    border-color: ${(props) => props.theme.borderColorFocus};
  }
  &:disabled {
    background-color: ${(props) => props.theme.backgroundColorDisabled};
    border-color: ${(props) => props.theme.borderColorDisabled};
    opacity: 0.56;
    cursor: not-allowed;
  }
`;
