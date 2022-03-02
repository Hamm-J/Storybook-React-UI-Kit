import {
  FileContainer,
  UploadLabel,
  UploadField,
  TextWrapper,
  Description,
  ProgressBar,
} from "./Files.styled";
import PropTypes from "prop-types";

const Files = ({
  fileState,
  uploadLabel,
  uploadAnchor,
  description,
  progressBarValue,
}) => {
  return (
    <FileContainer>
      <TextWrapper>
        <UploadField className="file-input" id="file-input" />
        <UploadLabel className="file-label" htmlFor="file-input">
          Select a file{" "}
        </UploadLabel>{" "}
        <label> or click to download </label>
        <Description>{description}</Description>
      </TextWrapper>
      <ProgressBar value={progressBarValue} max="100">
        {progressBarValue}
      </ProgressBar>
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
};

export default Files;
