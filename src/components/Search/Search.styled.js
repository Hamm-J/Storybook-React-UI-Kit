import styled, { css } from "styled-components";
import { Search, Close } from "@styled-icons/material";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 482px;
  box-shadow: ${(props) => props.theme.shadowDefault};
  cursor: text;
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
    box-shadow: ${(props) => props.theme.shadowDefault};
  }
`;

export const InputField = styled.input.attrs({ type: "input" })`
  width: 100%;
  border: none;
  outline: none;
  padding-left: 10px;
  font: ${(props) => props.theme.fontParagraph2};

  &:active ~ .input-label,
  &:focus ~ .input-label,
  &:not(:placeholder-shown) ~ .input-label {
    opacity: 0;
  }

  &:focus ~ .search-icon {
    color: ${(props) => props.theme.colorBlack};
  }

  &:not(:placeholder-shown) ~ .close-icon {
    opacity: 1;
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  left: 30px;
  color: gray;
  padding-left: 10px;
  font: ${(props) => props.theme.fontParagraph2};

  &:hover {
    cursor: text;
  }
`;

export const SearchIcon = styled(Search)`
  order: -1;
  width: 25px;
  color: ${(props) => props.theme.colorGray};
`;

export const CloseIcon = styled(Close)`
  opacity: 0;
  width: 25px;
  color: ${(props) => props.theme.colorGray};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colorBlack};
  }
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
  padding-left: 16px;
  padding: 8px 16px 8px 16px;
  width: calc(482px - 32px);
  height: 24px;
  cursor: ${(props) =>
    props.resultsState === "found" ? "pointer" : "default"};
  outline: none;
  ${(props) =>
    props.resultsState === "found" &&
    css`
      &:hover,
      &:focus {
        background-color: ${(props) => props.theme.colorGrayL};
        width: calc(100% - 32px);
      }
    `}
`;

export const ResultText = styled.span`
  cursor: pointer;
  font: ${(props) => props.theme.fontParagraph2};
`;

export const ResultLoading = styled.div`
  display: block;
  background-color: ${(props) => props.theme.colorGrayL};
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
  color: ${(props) => props.theme.colorGray};
  font: ${(props) => props.theme.fontParagraph2};

  cursor: default;
`;
