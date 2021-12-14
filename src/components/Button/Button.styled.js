import styled, { keyframes } from "styled-components";
import { Add, Refresh } from "@styled-icons/material";

export const ButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ButtonLabel = styled.span``;

const RefreshIconAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const AddIcon = styled(Add)`
  width: 25px;
`;

export const RefreshIcon = styled(Refresh)`
  width: 25px;
  animation-name: ${RefreshIconAnimation};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
`;

export const ButtonField = styled.button`
  /* width: 124px; */
  padding: 10px 10px;
  height: 44px;
  outline: none;
  border: none;
  cursor: ${(props) => props.cursorState};
  border-radius: .3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* Attributes with props/args */
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.fontColor};

  &:hover {
    background-color: #5835b0;
    transition: all 200ms;
  }
  &:active {
    background-color: #472c8a;
    transition: all 200ms;
  }
  &:focus {
    outline: solid;
    outline-width: 2px;
    outline-color: #111111;
  }
  &:disabled {
    background-color: #e3daf9;
    cursor: not-allowed; 
  }
`;
