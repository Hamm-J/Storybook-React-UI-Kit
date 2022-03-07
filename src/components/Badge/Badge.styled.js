import styled from "styled-components";

export const BadgeContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: 100px;
  height: 24px;
  padding: 1px 8px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.borderColor};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const Label = styled.label`
  color: ${(props) => props.theme.color};
  font: ${(props) => props.theme.fontParagraph3Bold};
`;
