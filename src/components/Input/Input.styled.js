import styled from "styled-components";
import { Done } from "@styled-icons/material";

export const InputContainer = styled.div`
  background-color: ${(props) => {
    switch (props.inputState) {
      case "error":
        return "#F9E3E3";
      case "success":
        return "#CBECD9";
      case "autofill":
        return "#FFF5C0";
      default:
        return "#FFFFFF";
    }
  }};
  position: relative;
  width: 482px;
  height: 56px;
  border-radius: 2px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  &:hover {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 56px rgba(51, 51, 51, 0.16);
  }
  &:focus-within {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 24px rgba(51, 51, 51, 0.24);
  }
`;

export const InputField = styled.input.attrs({ type: "input" })`
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  border: none;
  background: none;
  outline: none;
  padding-top: 8px;
  padding-left: 16px;
  font-size: 16px;
  line-height: 24px;

  &:disabled,
  &:disabled ~ .label {
    cursor: not-allowed;
    color: rgba(17, 17, 17, 0.24);
  }

  &:focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:focus ~ .label,
  &:not(:placeholder-shown).input-field:not(:focus) ~ .label {
    top: 10px;
    left: 16px;
    font-size: 0.8rem;
  }

  &:focus ~ .input {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 24px rgba(51, 51, 51, 0.24);
  }
  &:active ~ .input {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 24px rgba(51, 51, 51, 0.24);
  }
`;

export const Label = styled.label`
  position: absolute;
  font-size: 16px;
  left: 16px;
  top: 20px;
  cursor: text;
  color: rgba(17, 17, 17, 0.48);
`;

export const Message = styled.label`
  position: absolute;
  top: 65px;
  left: 2px;
  color: #db524e;
  color: ${(props) =>
    props.inputState === "error" ? "#DB524E" : "rgba(17, 17, 17, 0.48)"};
`;

export const DoneIcon = styled(Done)`
  position: absolute;
  top: 14px;
  left: 450px;
  width: 24px;
  color: #27ae60;
`;
