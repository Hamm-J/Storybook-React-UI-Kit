import styled, { css } from "styled-components";
import { Search, Close } from "@styled-icons/material";

export const SearchContainer = styled.div`
  /* TODO: JH2021_12_23: sort out how I should do the gap */
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 482px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
`;

export const InputWrapper = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  &:hover {
    box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
      0px 4px 16px rgba(51, 51, 51, 0.08);
  }
`;

export const InputField = styled.input.attrs({ type: "input" })`
  width: 100%;
  border: none;
  outline: none;
  padding-left: 10px;

  &:active ~ .input__label,
  &:focus ~ .input__label,
  &:not(:placeholder-shown) ~ .input__label {
    opacity: 0;
  }

  &:focus ~ .search__icon {
    color: black;
  }

  &:not(:placeholder-shown) ~ .close__icon {
    opacity: 1;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 30px;
  color: gray;
  padding-left: 10px;

  &:hover {
    cursor: text;
  }
`;

export const SearchIcon = styled(Search)`
  order: -1;
  width: 25px;
  color: rgba(17, 17, 17, 0.48);
`;

export const CloseIcon = styled(Close)`
  opacity: 0;
  width: 25px;
  color: rgba(17, 17, 17, 0.48);
  cursor: pointer;

  &:hover {
    color: black;
  }
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
  padding-left: 16px;
  padding: 8px 16px 8px 16px;
  width: 482px;
  height: 24px;
  cursor: ${(props) => (props.resultsState == "found" ? "pointer" : "default")};
  ${(props) =>
    props.resultsState == "found" &&
    css`
      &:hover {
        background-color: #f1f1f1;
        width: calc(100% - 32px);
      }
    `}
`;

export const ResultText = styled.span`
  cursor: pointer;
`;

export const ResultLoading = styled.div`
  display: block;
  background-color: #f1f1f1;
  width: calc(100% - 32px);
  height: 26px;
`;

export const NoResults = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding: 8px 16px 8px 16px;
  width: 482px;
  height: 24px;
  color: rgba(17, 17, 17, 0.48);

  cursor: default;
`;
