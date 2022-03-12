import styled from "styled-components";

export const FilterGroupWrapper = styled.div`
  max-width: fit-content;
  max-height: fit-content;
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const FilterContainer = styled.div``;

const handleLabelBorderRadius = (position) => {
  switch (position) {
    case "left":
      return "4px 0px 0px 4px";
    case "right":
      return "0px 4px 4px 0px";
    default:
      return "0 0 0 0";
  }
};

const handleLabelBorderOverlap = (position) => {
  switch (position) {
    case "left":
      return "0px 0px 0px 0px";
    case "right":
      return "0px 0px 0px 0px";
    default:
      return "0 0 0 0";
  }
};

export const Label = styled.label`
  display: block;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 56px;
  /* margin: ${(props) => handleLabelBorderOverlap(props.position)}; */
  /* margin: 0 -1px 0 -1px; */
  font: ${(props) => props.theme.fontParagraph2};
  border: 2px solid ${(props) => props.theme.colorGrayS};
  border-radius: ${(props) => handleLabelBorderRadius(props.position)};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: 2px solid ${(props) => props.theme.colorGrayK};
  }
`;
export const InputField = styled.input.attrs({ type: "radio" })`
  display: none;

  &:checked ~ ${Label} {
    border: 2px solid ${(props) => props.theme.colorPrimary};
    /* margin: ${(props) => handleLabelBorderOverlap(props.position)}; */
  }

  &:checked ~ ${Label}:hover {
    border: 2px solid ${(props) => props.theme.colorHover};
  }
`;
