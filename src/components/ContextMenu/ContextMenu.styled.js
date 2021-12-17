import styled from "styled-components";
import { Done } from "@styled-icons/material";

export const MenuWrapper = styled.div`
  width: 244px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 24px rgba(51, 51, 51, 0.24);
`;
export const MenuItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 12px;

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }
`;

export const MenuItemLabel = styled.label`
  &:hover {
    cursor: pointer;
  }
`;

export const MenuSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding-left: 12px;
  background-color: #fafafa;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
`;

export const DoneIcon = styled(Done)`
  width: 25px;
  padding-right: 12px;
`;
