import styled from "styled-components";

export const CheckboxContainer = styled.div`
  position: relative;
`;
export const InputField = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  box-sizing: border-box;

  &:checked ~ .checkbox__label:before {
    border-color: ${(props) => props.theme.borderColor};
    border-width: 2px;
    background-color: ${(props) => props.theme.backgroundColor};
  }

  // Label:after pseudo element creates the "checkmark"
  &:checked ~ .checkbox__label:after {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 20px;
    content: "✔";
    color: ${(props) => props.theme.color};
  }
  // Creates "x" when indeterminate
  &:indeterminate ~ .checkbox__label:after {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 20px;
    content: "x";
    color: ${(props) => props.theme.color};
  }

  // checkbox in focus
  &:focus + .checkbox__label:before {
    border-width: 2px;
    border-color: ${(props) => props.theme.borderColorFocus};
  }
  // checkbox not checked, but disabled
  &:not(:checked):disabled + .checkbox__label:before {
    border-width: 1px;
    border-color: ${(props) => props.theme.borderColorDisabled};
    background-color: ${(props) => props.theme.colorWhite};
    cursor: not-allowed;
  }

  // checkbox disabled
  &:disabled + .checkbox__label {
    color: ${(props) => props.theme.colorGray};
    cursor: not-allowed;
  }
  // checkbox checked and hovered over
  &:checked + .checkbox__label:hover:before {
    background-color: ${(props) => props.theme.backgroundColorHover};
  }

  // checkbox checked and active
  &:checked + .checkbox__label:active:before {
    background-color: ${(props) => props.theme.backgroundColorActive};
  }

  // checkbox checked and in focus
  &:checked:focus + .checkbox__label:before {
    border-width: 2px;
    border-color: ${(props) => props.theme.borderColorFocus};
  }

  // checkbox checked and disabled
  &:checked:disabled + .checkbox__label:before {
    opacity: 0.56;
  }
`;

export const Label = styled.label`
  padding-left: 5px;
  color: ${(props) =>
    props.checkboxState == "error"
      ? props.theme.colorRed
      : props.theme.colorBlack};

  // Label:before pseudo element creates the "checkbox"
  // Label:after pseudo element creates the "checkmark"
  &:before {
    cursor: pointer;
    border-radius: 4px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    outline: none;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) =>
      props.checkboxState === "error"
        ? props.theme.colorRedGirl
        : props.theme.colorGrayS};
    background-color: ${(props) =>
      props.checkboxState === "error"
        ? props.theme.colorRedGirl
        : props.theme.colorWhite};
  }

  // hover over "checkbox"
  &:hover:before {
    background-color: ${(props) => props.theme.colorGrayM};
  }

  // "checkbox" is active
  &:active:before {
    background-color: ${(props) => props.theme.colorGrayL};
  }
`;
