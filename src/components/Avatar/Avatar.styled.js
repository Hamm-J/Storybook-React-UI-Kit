import styled from "styled-components";

export const AvatarContainer = styled.div`
  position: relative;
  width: 52px;
  height: 52px;
  cursor: pointer;
`;

export const Icon = styled.label`
  margin-top: 3px;
  font-size: 30px;
  line-height: 37px;
  user-select: none;
  cursor: pointer;
`;

export const IconBackground = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colorGrayL};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
