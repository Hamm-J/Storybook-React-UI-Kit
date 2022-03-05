import styled from "styled-components";

export const InputTagContainer = styled.div`
  background-color: ${(props) =>
    props.inputState === "error" ? "#F9E3E3" : "#FFFFFF"};
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
  font-size: 16px;
  line-height: 24px;

  &:disabled,
  &:disabled ~ .input__label {
    cursor: not-allowed;
    color: rgba(17, 17, 17, 0.24);
  }

  &:focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &:focus ~ .input__label,
  &:not(:placeholder-shown).input__field:not(:focus) ~ .input__label {
    opacity: 0;
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

export const InputLabel = styled.label`
  position: absolute;
  font-size: 16px;
  left: 16px;
  top: 20px;
  opacity: ${(props) => (props.tags.length ? "0" : "1")};
  cursor: text;
  color: rgba(17, 17, 17, 0.48);
`;

export const InputMessage = styled.label`
  position: absolute;
  top: 65px;
  left: 2px;
  color: #db524e;
  color: ${(props) =>
    props.inputState === "error" ? "#DB524E" : "rgba(17, 17, 17, 0.48)"};
`;
