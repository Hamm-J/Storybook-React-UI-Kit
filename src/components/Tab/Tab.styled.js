import styled from "styled-components";

export const TabContainer = styled.div`
  width: 92px;
  padding-bottom: 25px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0px -2px 0px rgba(17, 17, 17, 0.48);
  }

  &:active {
    box-shadow: inset 0px -2px 0px #6e41e2;
  }

  &:active > .tab__label {
    color: black;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  color: rgba(17, 17, 17, 0.48);
`;
