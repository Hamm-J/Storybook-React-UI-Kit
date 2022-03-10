import styled, { css } from "styled-components";

const handleTabPadding = (state) => {
  switch (state) {
    case "large":
      return "21px 0 25px 0";
    case "medium":
      return "7px 0 15px 0";
    case "small":
      return "10px 0 7px 0";
    case "horizontal":
      return "6px 0 4px 0";
    default:
  }
};

export const TabContainer = styled.div`
  max-width: fit-content;
  max-height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;
  padding: ${(props) => handleTabPadding(props.tabState)};

  &:hover > .label {
    color: ${(props) => props.theme.colorGrayK};
  }

  &:active > .label {
    color: ${(props) => props.theme.colorBlack};
  }

  // set box-shadow for large, medium, and small tabState's
  // add line to bottom
  ${(props) =>
    !(props.tabState === "horizontal") &&
    css`
      &:hover {
        box-shadow: inset 0px -2px 0px ${(props) => props.theme.colorGray};
      }
      &:active {
        box-shadow: inset 0px -2px 0px ${(props) => props.theme.backgroundColor};
      }
    `}

  // set the box-shadow for the horizontal tabState
  // add line to left
  ${(props) =>
    props.tabState === "horizontal" &&
    css`
      box-shadow: inset 2px 0px 0px ${(props) => props.theme.colorGrayL};
      padding-left: 22px;

      &:hover {
        box-shadow: inset 2px 0px 0px ${(props) => props.theme.colorGray};
      }
      &:active {
        box-shadow: inset 2px 0px 0px ${(props) => props.theme.backgroundColor};
      }
    `}
`;

export const Label = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.colorGray};
  font: ${(props) =>
    props.tabState === "small"
      ? props.theme.fontParagraph3
      : props.theme.fontParagraph2};
`;
