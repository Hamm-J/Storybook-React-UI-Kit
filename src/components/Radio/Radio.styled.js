import styled from "styled-components";

export const RadioContainer = styled.div`
  width: 80px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled.input.attrs({ type: "radio" })`
  opacity: 0;

  // "radio" checked inner white circle
  &:checked ~ .label:after {
    content: "";
    display: inline-block;
    background-color: ${(props) => props.theme.color};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 7px;
  }

  &:checked ~ .label:before {
    background-color: ${(props) => props.theme.backgroundColor};
    border: 2px solid ${(props) => props.theme.borderColor};
  }
  &:hover:not(:checked) ~ .label:before {
    background-color: ${(props) => props.theme.backgroundColor};
    border: 2px solid ${(props) => props.theme.borderColor};
    opacity: 0.56;
  }
  &:hover:not(:checked) ~ .label,
  &:hover:not(:checked) ~ .label:before {
    cursor: pointer;
  }
  &:hover:checked ~ .label:before {
    background-color: ${(props) => props.theme.backgroundColorHover};
  }

  &:disabled ~ .label:before,
  &:disabled:hover ~ .label:before,
  &:disabled ~ .label:after,
  &:disabled:hover ~ .label:after {
    background-color: ${(props) => props.theme.backgroundColorDisabled};
    cursor: not-allowed;
  }

  &:disabled ~ .label:after {
    opacity: 0;
  }

  &:focus ~ .label:before {
    border: 2px solid ${(props) => props.theme.borderColorFocus};
  }
`;

export const Label = styled.label`
  padding-top: 2px;
  // have -10px margin so that the label field overlaps with the :before element
  // this way the pointer cursor doesn't disappear when hovering between the
  // label and the :before element
  padding-left: 25px;
  margin-left: -10px;
  font: ${(props) => props.theme.fontParagraph2};

  // "radio" circle
  &:before {
    content: "";
    display: inline-block;
    background-color: ${(props) => props.theme.backgroundColorDisabled};
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.borderColorDisabled};
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    box-shadow: ${(props) => props.theme.boxShadow};
  }
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.radioGroupDirection};
  gap: 10px;
`;
