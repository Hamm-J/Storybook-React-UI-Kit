import { useState } from "react";
import PropTypes from "prop-types";
import { TagWrapper, TagCloseSpan, TagLabel, CloseIcon } from "./Tag.styled";

const Tag = ({ label, close }) => {
  const [closed, setClosed] = useState(false);

  return closed ? (
    <></>
  ) : (
    <TagWrapper>
      <TagLabel>{label}</TagLabel>
      <TagCloseSpan onClick={() => setClosed(true)}>
        <CloseIcon />
      </TagCloseSpan>
    </TagWrapper>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
  close: PropTypes.bool,
};

export default Tag;
