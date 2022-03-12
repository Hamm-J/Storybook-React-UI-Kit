import styled, { css } from "styled-components";
import { Done } from "@styled-icons/material";

export const InputContainer = styled.div`
  background-color: ${(props) => {
    switch (props.inputState) {
      case "error":
        return (props) => props.theme.colorRedGirl;
      case "success":
        return (props) => props.theme.colorGreenLight;
      case "autofill":
        return (props) => props.theme.colorYellow;
      default:
        return (props) => props.theme.colorWhite;
    }
  }};
  position: relative;
  width: 482px;
  height: 56px;
  border-radius: 2px;
  box-shadow: ${(props) => props.theme.shadowDefault};
  cursor: text;

  ${(props) =>
    !(props.inputState === "readonly") &&
    css`
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `};

  &:hover {
    box-shadow: ${(props) => props.theme.shadowHover};
  }

  &:focus-within {
    box-shadow: ${(props) => props.theme.shadowActive};
  }
`;

export const InputField = styled.input.attrs({ type: "input" })`
  position: absolute;
  width: calc(100% - 2 * 16px);
  margin: 0;
  padding: 0;
  top: 30px;
  left: 16px;
  border: none;
  background: none;
  outline: none;
  font: ${(props) => props.theme.fontParagraph2};
  color: ${(props) => props.theme.colorBlack};

  &:disabled,
  &:disabled ~ .label {
    cursor: not-allowed;
    opacity: 0.24;
  }

  &:focus ~ .label,
  &:not(:placeholder-shown).input-field:not(:focus) ~ .label {
    top: 10px;
    left: 16px;
    font: ${(props) => props.theme.fontParagraph3};
  }
`;

export const Label = styled.label`
  position: absolute;
  font: ${(props) => props.theme.fontParagraph2};
  left: 16px;
  top: 16px;
  cursor: text;
  color: ${(props) => props.theme.colorGray};
`;

export const Message = styled.label`
  position: absolute;
  font: ${(props) => props.theme.fontParagraph2};
  top: 65px;
  left: 2px;
  color: ${(props) =>
    props.inputState === "error"
      ? props.theme.colorRed
      : props.theme.colorGray};
`;

export const DoneIcon = styled(Done)`
  position: absolute;
  top: 14px;
  left: 450px;
  width: 24px;
  color: ${(props) => props.theme.colorGreen};
`;
