import styled from "styled-components";
import { Close, KeyboardArrowDown, Done } from "@styled-icons/material";

export const SelectTagContainer = styled.div`
  position: relative;
  width: 482px;
  box-sizing: border-box;

  &:hover {
    box-shadow: ${(props) => props.theme.shadowHover};
  }

  &:focus-within {
    box-shadow: ${(props) => props.theme.shadowActive};
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 2px;
  position: relative;
  border: none;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: ${(props) => props.theme.shadowDefault};
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
  padding-right: 4px;
  min-width: fit-content;
`;

export const InputField = styled.input.attrs({ type: "input" })`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  min-width: 80%;
  margin: 0;
  border: none;
  padding: 8px 66px 0 0px;
  background: none;
  outline: none;
  font: ${(props) => props.theme.fontParagraph2};

  &:focus,
  &:not(:placeholder-shown).input-field:not(:focus),
  &:-webkit-autofill {
    & ~ .label {
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
  box-shadow: ${(props) => props.theme.shadowDefault};
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
  font: ${(props) => props.theme.fontParagraph2};
  outline: none;

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colorGrayL};
  }
`;

export const ResultText = styled.span``;

export const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 16px;
  color: ${(props) => props.theme.colorGray};
  cursor: text;
  display: ${(props) => (props.tags.length ? "none" : "inline")};
  font: ${(props) => props.theme.fontParagraph2};
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  color: ${(props) => props.theme.colorGray};
  position: absolute;
  top: 16px;
  right: 45px;

  &:hover {
    color: ${(props) => props.theme.colorBlack};
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

  color: ${(props) =>
    props.resultsWindow ? props.theme.colorBlack : props.theme.colorGray};
`;

export const DoneIcon = styled(Done)`
  width: 24px;
`;
