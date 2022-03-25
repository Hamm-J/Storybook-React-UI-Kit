import styled from "styled-components";
import { InsertDriveFile } from "@styled-icons/material";

export const FileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 675px;
  height: 92px;
  border-radius: 4px;
  box-shadow: ${(props) => props.theme.shadowDefault};
  background-color: ${(props) =>
    (props.dragOver || props.filesState === "dragOver") &&
    props.theme.colorPrimary};
  box-sizing: border-box;
  cursor: ${(props) => props.dragOver && "grabbing"};
`;

export const UploadLabelClick = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.colorPrimary};
  font: ${(props) => props.theme.fontParagraph2};

  &:hover {
    text-decoration: underline;
  }
`;

export const UploadLabel = styled.span`
  font: ${(props) => props.theme.fontParagraph2};
  color: ${(props) => props.theme.colorBlack};
`;

export const UploadField = styled.input.attrs({ type: "file" })`
  display: none;
`;

export const ContentWrapper = styled.div`
  padding: 20px 20px 16px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div``;
export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  font: ${(props) => props.theme.fontParagraph3};
  color: ${(props) =>
    props.filesState === "error" ||
    props.filesState === "errorUploading" ||
    props.error
      ? props.theme.colorRed
      : props.theme.colorGray};
  margin: 0;
  padding-top: 8px;
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

export const ProgressValue = styled.p`
  padding: 0;
  margin: 0;
  font: ${(props) => props.theme.fontHeading5};
  color: ${(props) => props.theme.colorDisabled};
`;

export const FileIcon = styled(InsertDriveFile)`
  color: ${(props) =>
    props.files.length > 0 || props.filesState === "uploaded"
      ? props.theme.colorPrimary
      : props.theme.colorWhite};
  width: 24px;
`;

export const FileIconWrapper = styled.div`
  height: 92px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconBackground = styled.div`
  width: 56px;
  height: 56px;
  background-color: ${(props) => props.theme.colorGrayL};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteButton = styled.button`
  border: none;
  background: none;
  color: ${(props) => props.theme.colorPrimary};
  cursor: pointer;
  margin: 0;
  padding: 8px 0 0 0;
  font: ${(props) => props.theme.fontParagraph3};
`;

export const FileInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const FileSize = styled.p`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colorGray};
  margin-left: 5px;
  font: ${(props) => props.theme.fontParagraph2};
`;

export const FileName = styled.p`
  margin: 0;
  padding: 0;
  font: ${(props) => props.theme.fontParagraph2};
`;
