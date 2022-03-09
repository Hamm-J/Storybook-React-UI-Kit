import styled from "styled-components";
import { Close } from "@styled-icons/material";

export const TagContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  height: ${(props) => (props.size === "small" ? "24px" : "28px")};
  min-width: fit-content;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  padding: 1px 8px;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.boxShadow};

  &:hover {
    background-color: ${(props) => props.theme.backgroundColorHover};
  }
`;

export const Label = styled.label`
  color: ${(props) => props.theme.color};
  font: ${(props) =>
    props.size === "small"
      ? props.theme.fontParagraph3Bold
      : props.theme.fontParagraph2};
`;

export const CloseIcon = styled(Close)`
  color: ${(props) => props.theme.color};
  cursor: pointer;
  width: 18px;

  &:hover {
    color: ${(props) => props.theme.colorBlack};
  }
`;
