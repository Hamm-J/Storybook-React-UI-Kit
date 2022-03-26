import styled, { css, keyframes } from "styled-components";

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
  /* max-width: 347px; */
  max-width: ${(props) =>
    props.tabState === "horizontal" ? "347px" : "fit-content"};
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

  &:active .progress-left,
  &:active .progress-right {
    background-color: ${(props) => props.theme.colorGrayL};
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

export const CircleWrapper = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  border-radius: 100%;
  overflow: hidden;
`;
export const Inner = styled.div`
  position: absolute;
  z-index: 6;
  top: 50%;
  left: 50%;
  height: 16px;
  width: 16px;
  margin: -8px 0 0 -8px;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 100%;
`;
export const Circle = styled.div``;

export const BarLeft = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colorGrayL};
  clip: rect(0px, 20px, 20px, 10px);

  transform: rotate(180deg);
`;
export const BarRight = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.colorGrayL};
  clip: rect(0px, 20px, 20px, 10px);

  /* transform: rotate(180deg); */
  z-index: 3;
`;
const left = keyframes`
  100% {
    transform: rotate(180deg)
  }
`;
export const ProgressLeft = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  clip: rect(0px, 10px, 20px, 0px);
  background-color: ${(props) => props.theme.colorGreen};

  z-index: 1;
  /* animation: ${left} 4s linear both;
  animation-delay: 4s; */
  transform: rotate(0deg);
`;

const right = keyframes`
  100% {
    transform: rotate(180deg);
  }
`;

export const ProgressRight = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 100%;
  clip: rect(0px, 10px, 20px, 0px);
  background-color: ${(props) => props.theme.colorGreen};
  transform: rotate(90deg);
  /* animation: ${right} 4s linear both; */
`;
