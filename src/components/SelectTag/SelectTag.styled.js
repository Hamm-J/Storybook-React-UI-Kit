import styled from "styled-components";
import { Close, KeyboardArrowDown, Done } from "@styled-icons/material";

export const SelectTagContainer = styled.div`
  position: relative;
  width: 482px;
  box-sizing: border-box;

  &:hover {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 56px rgba(51, 51, 51, 0.16);
  }

  &:focus-within {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 24px rgba(51, 51, 51, 0.24);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 2px;
  position: relative;

  border: none;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
  padding-right: 4px;
`;

export const InputField = styled.input.attrs({ type: "input" })`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  min-width: 80%;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  border: none;
  padding: 8px 66px 0 0px;
  background: none;
  outline: none;

  &:focus,
  &:not(:placeholder-shown).input__field:not(:focus),
  &:-webkit-autofill {
    & ~ .input__label {
      opacity: 0;
    }
  }
`;

export const OverFlowWrapper = styled.div`
  height: 100%;
  width: 380px;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  padding-left: 16px;
`;

export const ResultsWrapper = styled.div`
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 4px;
`;

export const Result = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
  padding: 8px 16px 8px 16px;
  height: 24px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ResultText = styled.span``;

export const InputLabel = styled.label`
  position: absolute;
  top: 20px;
  left: 16px;
  color: rgba(17, 17, 17, 0.48);
  font-size: 16px;
  line-height: 20px;
  cursor: text;
  opacity: ${(props) => (props.tags.length ? "0" : "1")};
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  color: #c4c4c4;
  position: absolute;
  top: 16px;
  right: 45px;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export const ArrowIcon = styled(KeyboardArrowDown)`
  width: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  transform: ${(props) =>
    props.resultsWindow ? "rotate(180deg)" : "rotate(0deg)"};

  color: ${(props) => (props.resultsWindow ? "black" : "#c4c4c4")};
`;

export const DoneIcon = styled(Done)`
  width: 24px;
`;
