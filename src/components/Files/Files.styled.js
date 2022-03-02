import styled from "styled-components";

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 675px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadowDefault};
`;

export const UploadLabel = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.colorPrimary};

  &:hover {
    text-decoration: underline;
  }
`;

export const UploadField = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const TextWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  padding: 20px 20px 16px 20px;
`;

export const ProgressBar = styled.progress`
  background: #ffffff00;
  border: none;
  height: 4px;
  width: 100%;

  &::-moz-progress-bar {
    background: ${(props) => props.theme.colorPrimary};
  }
  &::-webkit-progress-bar {
    background: #ffffff00;
  }
  &::-webkit-progress-value {
    background: ${(props) => props.theme.colorPrimary};
  }
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 20px;
  color: ${(props) => props.theme.colorGray};
`;
