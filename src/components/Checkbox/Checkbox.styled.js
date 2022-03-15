import styled from "styled-components";

export const CheckboxContainer = styled.div`
  max-width: fit-content;
  max-height: fit-content;
`;
export const InputField = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;

  &:checked ~ .label:before {
    border-color: ${(props) => props.theme.borderColor};
    border-width: 2px;
    background-color: ${(props) => props.theme.backgroundColor};
    // change width and height to cancel out border-width increase
    width: 20px;
    height: 20px;
  }

  // Label:after pseudo element creates the "checkmark"
  &:checked ~ .label:after {
    cursor: pointer;
    position: absolute;
    display: inline-block;
    width: 24px;
    height: 24px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    content: "✓";
    color: ${(props) => props.theme.color};
  }
  // Creates "x" when indeterminate
  &:indeterminate ~ .label:after {
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
  &:focus + .label:before {
    border-width: 2px;
    border-color: ${(props) => props.theme.borderColorFocus};
    // change width and height to cancel out border-width increase
    width: 20px;
    height: 20px;
  }
  // checkbox not checked, but disabled
  &:not(:checked):disabled + .label:before {
    border-width: 1px;
    border-color: ${(props) => props.theme.borderColorDisabled};
    background-color: ${(props) => props.theme.colorWhite};
    cursor: not-allowed;
  }

  // checkbox disabled
  &:disabled + .label {
    color: ${(props) => props.theme.colorGray};
    cursor: not-allowed;
  }
  // checkbox checked and hovered over
  &:checked + .label:hover:before {
    background-color: ${(props) => props.theme.backgroundColorHover};
  }

  // checkbox checked and active
  &:checked + .label:active:before {
    background-color: ${(props) => props.theme.backgroundColorActive};
  }

  // checkbox checked and in focus
  &:checked:focus + .label:before {
    border-width: 2px;
    border-color: ${(props) => props.theme.borderColorFocus};
    // change width to cancel out border-width increase
    width: 20px;
    height: 20px;
  }

  // checkbox checked and disabled
  &:checked:disabled + .label:before {
    opacity: 0.56;
  }
`;

export const Label = styled.label`
  font: ${(props) => props.theme.fontParagraph2};
  color: ${(props) =>
    props.checkboxState === "error"
      ? props.theme.colorRed
      : props.theme.colorBlack};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;

  // Label:before pseudo element creates the "checkbox"
  // Label:after pseudo element creates the "checkmark"
  &:before {
    cursor: pointer;
    border-radius: 4px;
    content: "";
    display: inline-block;
    width: 22px;
    height: 22px;
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
    box-shadow: ${(props) => props.theme.boxShadow};
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
