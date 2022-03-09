import PropTypes from "prop-types";
import { TagContainer, Label, CloseIcon } from "./Tag.styled";

const Tag = ({ label, size, handleClose }) => {
  return (
    <TagContainer size={size}>
      <Label>{label}</Label>
      <CloseIcon onClick={(e) => handleClose(e)} />
    </TagContainer>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
};

export default Tag;
