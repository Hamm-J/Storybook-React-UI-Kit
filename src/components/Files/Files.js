import { useState, useEffect } from "react";
import {
  FileContainer,
  UploadLabelClick,
  UploadLabel,
  UploadField,
  ContentWrapper,
  LeftWrapper,
  RightWrapper,
  Description,
  ProgressBar,
  ProgressValue,
  FileIcon,
  FileIconWrapper,
  IconBackground,
  FileSize,
  DeleteButton,
  FileName,
  FileInfoWrapper,
} from "./Files.styled";
import PropTypes from "prop-types";
import Avatar from "../Avatar/Avatar";

const Files = ({
  description,
  errorMessage,
  errorMessageUploading,
  progressBarValue,
  filesState,
  handleAvatar,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileSize, setFileSize] = useState(0);
  const [fileName, setFileName] = useState("File name");
  const [error, setError] = useState(false);

  const handleUploadField = (e) => {
    console.log(e);
    console.log(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const { files } = e.dataTransfer;
    console.log(files);
    setDragOver(false);
    if (!files.length) return;

    // convert file size to mb
    const sizeMB = (files[0].size / 1024 / 1024).toFixed(1);
    if (sizeMB >= 10) {
      setError(true);
      return;
    }

    // create a new array object for deleting the file
    setFiles(Array.from(files));
    // get file name
    setFileName(files[0].name);
    // set file size
    setFileSize(sizeMB);

    console.log(files[0].size);
    console.log(sizeMB);
  };

  const handleDelete = () => {
    setFiles([]);
    setFileName("File name");
    setFileSize(0);
    setError(false);
  };

  return (
    <FileContainer
      onDragOver={(e) => {
        e.preventDefault();
        console.log(dragOver);
      }}
      onDrop={(e) => handleDrop(e)}
      onDragEnter={() => {
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      dragOver={dragOver}
      filesState={filesState}
    >
      {/* render non-dragged over states */}
      {!dragOver && filesState !== "dragOver" && (
        <ContentWrapper>
          <LeftWrapper>
            {/* render left wrapper default, avatar, uploading, error, 
            errorUploading, and no uploaded files states*/}
            {files.length === 0 &&
              (filesState === "default" ||
                filesState === "avatar" ||
                filesState === "error" ||
                filesState === "errorUploading") && (
                <>
                  <UploadField
                    className="file-input"
                    id="file-input"
                    onChange={(e) => handleUploadField(e)}
                  />
                  <UploadLabelClick className="file-label" htmlFor="file-input">
                    Select a file{" "}
                  </UploadLabelClick>{" "}
                  <UploadLabel> or drag in form</UploadLabel>
                  <Description filesState={filesState} error={error}>
                    {/* Change description message depending on if the state is
                    and error state or not */}
                    {filesState === "error" || error
                      ? errorMessage
                      : filesState === "errorUploading"
                      ? errorMessageUploading
                      : description}
                  </Description>
                </>
              )}
            {files.length === 0 && filesState === "uploading" && (
              <>
                <FileName>Downloading</FileName>
                <Description filesState={filesState} error={error}>
                  {description}
                </Description>
              </>
            )}
            {/* Render left wrapper file uploaded states  */}
            {(files.length > 0 || filesState === "uploaded") && (
              <>
                <FileInfoWrapper>
                  <FileName>{fileName}</FileName>
                  <FileSize>{fileSize} MB</FileSize>
                </FileInfoWrapper>
                <DeleteButton onClick={() => handleDelete()}>
                  Delete file
                </DeleteButton>
              </>
            )}
          </LeftWrapper>
          <RightWrapper>
            {/* Render right wrapper avatar state when no file uploaded */}
            {files.length === 0 && filesState === "avatar" && (
              <Avatar avatar="🦁" handleClick={(e) => handleAvatar(e)}></Avatar>
            )}
            {/* Render right wrapper uploading and errorUploading states when no 
            files uploaded */}
            {files.length === 0 &&
              (filesState === "uploading" ||
                filesState === "errorUploading") && (
                <ProgressValue>{progressBarValue}%</ProgressValue>
              )}
            {/* Render right wrapper uploaded state */}
            {(files.length > 0 || filesState === "uploaded") && (
              <IconBackground>
                <FileIcon files={files} filesState={filesState} />
              </IconBackground>
            )}
          </RightWrapper>
        </ContentWrapper>
      )}
      {/* Render uploading and errorUploading states progress bar */}
      {files.length === 0 &&
        (filesState === "uploading" || filesState === "errorUploading") && (
          <ProgressBar value={progressBarValue} max="100">
            {progressBarValue}
          </ProgressBar>
        )}
      {/* Render dragged over states */}
      {(dragOver || filesState === "dragOver") && (
        <FileIconWrapper>
          <FileIcon files={files} filesState={filesState} />
        </FileIconWrapper>
      )}
    </FileContainer>
  );
};

Files.propTypes = {
  filesState: PropTypes.oneOf([
    "default",
    "dragOver",
    "uploading",
    "uploaded",
    "avatar",
    "error",
    "errorUploading",
  ]),
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  errorMessageUploading: PropTypes.string,
  progressBarValue: PropTypes.number,
};

export default Files;
