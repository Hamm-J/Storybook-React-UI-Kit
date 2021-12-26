import styled from "styled-components";
import { Done } from "@styled-icons/material";

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
`;

export const FlexWrapperLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const FlexWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding-left: 8px;
`;

export const ToggleHead = styled.p`
  color: black;
  margin: 0;
  padding: 0;
  padding-top: 3px;
`;

export const ToggleDescription = styled.p`
  color: rgba(17, 17, 17, 0.48);
  font-size: 13px;
  margin: 0;
  padding: 0;
`;

export const CheckboxField = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;

  &:checked ~ .toggle__label:before {
    left: 26px;
    background-color: white;
  }

  &:checked ~ .toggle__label {
    background-color: #6e41e2;
    border-color: #6e41e2;
  }

  &:not(:disabled):not(:checked) ~ .toggle__label:hover:before {
    background-color: #5835b0;
  }

  &:checked:not(:disabled) ~ .toggle__label:hover {
    background-color: #5835b0;
  }

  &:focus ~ .toggle__label {
    border: 2px solid rgba(17, 17, 17, 0.48);
  }

  &:disabled ~ .toggle__label,
  &:disabled ~ .toggle__label:after {
    opacity: 0.56;
    cursor: not-allowed;
  }

  &:disabled:checked ~ .toggle__label:after {
    opacity: 0;
  }
`;

export const ToggleLabel = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 48px;
  height: 24px;
  background: rgba(255, 255, 255, 0.88);
  border: 2px solid #e3daf9;
  box-sizing: border-box;
  border-radius: 100px;

  /* Slider */
  &:before {
    content: "";
    position: absolute;
    left: 4px;
    display: block;
    width: 16px;
    height: 16px;
    background-color: #6e41e2;
    border-radius: 50%;
    transition: 100ms;
    z-index: 1;
  }

  /* OffIcon (hollow circle) */
  &:after {
    content: "";
    position: absolute;
    left: 28px;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 2px solid #bbace2;
  }
`;

export const OnIcon = styled(Done)`
  position: absolute;
  left: 4px;
  width: 16px;
  color: white;
`;
