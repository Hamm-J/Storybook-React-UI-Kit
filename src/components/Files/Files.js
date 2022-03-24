import { useState, useEffect } from "react";
import {
  FileContainer,
  UploadLabel,
  UploadField,
  TextWrapper,
  Description,
  ProgressBar,
  FileIcon,
  FileIconWrapper,
  FileSize,
  DeleteButton,
  FileName,
} from "./Files.styled";
import PropTypes from "prop-types";

const Files = ({
  fileState,
  uploadLabel,
  uploadAnchor,
  description,
  progressBarValue,
  dragOverState,
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileSize, setFileSize] = useState(0);
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState();

  useEffect(() => {
    setDragOver(dragOverState);
  }, [dragOverState]);

  const handleUploadField = (e) => {
    console.log(e);
    console.log(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const { files } = e.dataTransfer;
    console.log(files);

    if (!files.length) return;
    // create a new array object for deleting the file
    setFiles(Array.from(files));

    // get file name
    setFileName(files[0].name);

    // convert file size to mb
    const sizeMB = (files[0].size / 1024 / 1024).toFixed(1);
    setFileSize(sizeMB);

    console.log(files[0].size);
    console.log(sizeMB);
    setDragOver(false);
  };

  const handleDelete = () => {
    setFiles([]);
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
    >
      {!dragOver && (
        <TextWrapper>
          {files.length === 0 && (
            <>
              <UploadField
                className="file-input"
                id="file-input"
                onChange={(e) => handleUploadField(e)}
              />
              <UploadLabel className="file-label" htmlFor="file-input">
                Select a file{" "}
              </UploadLabel>{" "}
              <label> or drag in form</label>
              <Description>{description}</Description>
            </>
          )}
          {files.length > 0 && (
            <>
              <FileName>{fileName}</FileName>
              <FileSize>{fileSize}MB</FileSize>
              <DeleteButton onClick={() => handleDelete()}>Delete</DeleteButton>
            </>
          )}
        </TextWrapper>
      )}
      {!dragOver && files.length === 0 && (
        <ProgressBar value={progressBarValue} max="100">
          {progressBarValue}
        </ProgressBar>
      )}
      {dragOver && (
        <FileIconWrapper>
          <FileIcon />
        </FileIconWrapper>
      )}
    </FileContainer>
  );
};

File.propTypes = {
  fileState: PropTypes.oneOf([
    "default",
    "uploading",
    "sizeError",
    "netError",
    "uploaded",
    "custom",
  ]),
  description: PropTypes.string,
  progressBarValue: PropTypes.number,
  dragOverState: PropTypes.bool,
};

export default Files;
