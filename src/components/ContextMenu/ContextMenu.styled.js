import styled from "styled-components";
import { Done } from "@styled-icons/material";

export const MenuContainer = styled.div`
  width: 244px;
  height: fit-content;
  background-color: ${(props) => props.theme.colorWhite};
  box-shadow: ${(props) => props.theme.shadowDefault};
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 12px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colorGrayL};
  }
`;

export const ItemLabel = styled.label`
  font: ${(props) => props.theme.fontParagraph2};
  cursor: pointer;
`;

export const SectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 12px;
  background-color: ${(props) => props.theme.colorGrayM};
  font: ${(props) => props.theme.fontParagraph3};
`;

export const DoneIcon = styled(Done)`
  width: 25px;
  padding-right: 12px;
`;
