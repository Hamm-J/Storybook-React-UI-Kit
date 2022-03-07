import styled, { keyframes } from "styled-components";
import { Add, Refresh } from "@styled-icons/material";

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.span`
  font: ${(props) => props.theme.fontParagraph2};
`;

export const AddIcon = styled(Add)`
  width: 25px;
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

export const ButtonField = styled.button`
  padding: 10px 10px;
  height: 44px;
  outline: none;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => props.theme.borderColor};
  cursor: ${(props) => (props.loadingState ? "wait" : "pointer")};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};

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
