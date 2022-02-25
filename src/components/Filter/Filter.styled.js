import styled from "styled-components";

export const FilterGroupWrapper = styled.div`
  margin-top: 10px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

export const FilterWrapper = styled.div``;

export const FilterLabel = styled.label`
  padding: 16px 24px;
  border: 2px solid #d4d4d4;
  border-radius: ${(props) => {
    switch (props.position) {
      case "left":
        return "4px 0px 0px 4px";
        break;
      case "right":
        return "0px 4px 4px 0px";
        break;
      default:
        return "0 0 0 0";
    }
  }};
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    border: 2px solid #6b6b6b;
  }
`;
export const FilterInputField = styled.input.attrs({ type: "radio" })`
  display: none;

  &:checked ~ ${FilterLabel} {
    border: 2px solid #6e41e2;
  }

  &:checked ~ ${FilterLabel}:hover {
    border: 2px solid #5835b0;
  }
`;
