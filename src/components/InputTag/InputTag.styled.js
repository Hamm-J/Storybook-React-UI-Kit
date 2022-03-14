import styled from "styled-components";

export const InputTagContainer = styled.div`
  background-color: ${(props) =>
    props.inputState === "error"
      ? props.theme.colorRedGirl
      : props.theme.colorWhite};
  cursor: text;
  position: relative;
  width: 482px;
  height: 56px;
  border-radius: 2px;
  box-shadow: ${(props) => props.theme.shadowDefault};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  &:hover {
    box-shadow: ${(props) => props.theme.shadowHover};
  }
  &:focus-within {
    box-shadow: ${(props) => props.theme.shadowActive};
  }
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
  padding-right: 4px;
`;

export const OverFlowWrapper = styled.div`
  overflow: scroll;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding-left: 14px;
  padding-right: 14px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InputField = styled.input.attrs({ type: "input" })`
  width: 100%;
  min-width: 80%;
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  border: none;
  background: none;
  outline: none;
  font: ${(props) => props.theme.fontParagraph2};

  &:disabled,
  &:disabled ~ .label {
    cursor: not-allowed;
    color: rgba(17, 17, 17, 0.24);
  }

  &:focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:focus ~ .label,
  &:not(:placeholder-shown).input__field:not(:focus) ~ .label {
    opacity: 0;
  }

  /* &:focus ~ .input {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 24px rgba(51, 51, 51, 0.24);
  }
  &:active ~ .input {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 24px rgba(51, 51, 51, 0.24);
  } */
`;

export const Label = styled.label`
  position: absolute;
  font: ${(props) => props.theme.fontParagraph2};
  left: 16px;
  top: 16px;
  display: ${(props) =>
    props.tags.length || props.inputValue.length ? "none" : "inline"};
  cursor: text;
  color: ${(props) => props.theme.colorGray};
`;

export const Message = styled.label`
  position: absolute;
  top: 65px;
  left: 2px;
  font: ${(props) => props.theme.fontParagraph2};
  color: ${(props) =>
    props.inputState === "error"
      ? props.theme.colorRed
      : props.theme.colorGray};
`;
