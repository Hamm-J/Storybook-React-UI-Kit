import styled from "styled-components";
import { Done } from "@styled-icons/material";

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
  padding-left: 8px;
`;

export const Head = styled.p`
  color: ${(props) => props.theme.colorBlack};
  font: ${(props) => props.theme.fontParagraph2};
  margin: 0;
  padding: 0;
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colorGray};
  font: ${(props) => props.theme.fontParagraph3};
  margin: 0;
  padding: 0;
`;

export const CheckboxField = styled.input.attrs({ type: "checkbox" })`
  position: absolute;
  opacity: 0;

  &:checked ~ .label:before {
    left: 26px;
    background-color: ${(props) => props.theme.colorWhite};
  }

  &:checked ~ .label {
    background-color: ${(props) => props.theme.backgroundColor};
    border-color: ${(props) => props.theme.backgroundColor};
  }

  &:not(:disabled):not(:checked) ~ .label:hover:before {
    background-color: ${(props) => props.theme.backgroundColorHover};
  }

  &:checked:not(:disabled) ~ .label:hover {
    background-color: ${(props) => props.theme.backgroundColorHover};
  }

  &:focus ~ .label {
    border: 2px solid ${(props) => props.theme.borderColorFocus};
  }

  &:disabled ~ .label,
  &:disabled ~ .label:after {
    opacity: 0.56;
    cursor: not-allowed;
  }

  &:disabled:checked ~ .label:after {
    opacity: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  width: 48px;
  height: 24px;
  background-color: ${(props) => props.theme.colorWhiteS};
  border: 2px solid ${(props) => props.theme.borderColorDisabled};
  box-sizing: border-box;
  border-radius: 100px;
  box-shadow: ${(props) => props.theme.boxShadow};

  /* Slider */
  &:before {
    content: "";
    position: absolute;
    left: 4px;
    display: block;
    width: 16px;
    height: 16px;
    background-color: ${(props) => props.theme.backgroundColor};
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
    border: 2px solid ${(props) => props.theme.borderColorDisabled};
  }
`;

export const OnIcon = styled(Done)`
  position: absolute;
  left: 4px;
  width: 16px;
  color: ${(props) => props.theme.color};
`;
