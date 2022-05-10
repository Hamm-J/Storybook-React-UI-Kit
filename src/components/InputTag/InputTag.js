import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  InputTagContainer,
  TagWrapper,
  OverFlowWrapper,
  InputField,
  Label,
  Message,
} from "./InputTag.styled";
import Tag from "../Tag/Tag";

const InputTag = ({
  label,
  inputStateValue,
  errorMessage,
  descriptionMessage,
  tagsMaxCount,
  handleDelete,
}) => {
  const [inputState, setInputState] = useState("");
  const [errorMessageState, setErrorMessageState] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    setInputState(inputStateValue);
  }, [inputStateValue]);

  useEffect(() => {
    setErrorMessageState(errorMessage);
  }, [errorMessage]);

  const [isKeyReleased, setIsKeyReleased] = useState(false);

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);

    const trimmedInputValue = value.trim();
    // If the tags array has reached it's limit and the user has begun entering
    // another tag, alert user with error message
    if (tags.length >= tagsMaxCount && trimmedInputValue !== "") {
      setInputState("error");
      setErrorMessageState("Filled.");
    } else if (tags.length <= tagsMaxCount && trimmedInputValue === "") {
      setInputState(inputStateValue);
      setErrorMessageState(errorMessage);
    }
  };

  const handleTags = (e) => {
    const { key } = e;
    // remove blank spaces from input
    const trimmedInputValue = inputValue.trim();

    // On key press "Enter" with an input that is not blank and not already
    // included in the tags array, add the current input value to tags
    if (
      key === "Enter" &&
      trimmedInputValue.length &&
      !tags.includes(trimmedInputValue) &&
      tags.length < tagsMaxCount
    ) {
      e.preventDefault();
      setTags((prevState) => [...prevState, trimmedInputValue]);
      setInputValue("");
      setInputState("default");
    }
    // if the entered tag is already within the tags array, alert user with error
    else if (tags.includes(trimmedInputValue)) {
      setErrorMessageState("Tag already taken.");
      setInputState("error");
    }

    // On key press of "Backspace" with an input that is not empty and tags
    // in the tags array while "Backspace" is held down, delete tag
    if (
      key === "Backspace" &&
      !inputValue.length &&
      tags.length &&
      isKeyReleased
    ) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      setTags(tagsCopy);
      setInputValue(poppedTag);
    }
    setIsKeyReleased(false);
  };

  // When the user lets go of "Backspace", let the user backspace again
  const handleKeyRelease = (e) => {
    setIsKeyReleased(true);
  };

  // Focus the input field whenever the container is clicked
  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <InputTagContainer
      inputState={inputState}
      onClick={() => handleFocusInput()}
    >
      <OverFlowWrapper>
        <TagWrapper>
          {tags.map((tag, tagIdx) => (
            <Tag
              key={tagIdx}
              label={tag}
              size={"medium"}
              // pass handleClose function so that argTypes fires as intended for
              // Tag story
              handleClose={(e) => handleDelete(e)}
            ></Tag>
          ))}
        </TagWrapper>
        <InputField
          className="input-field"
          id="input-id"
          placeholder=" "
          value={inputValue}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleTags(e)}
          onKeyUp={(e) => handleKeyRelease(e)}
          disabled={inputState === "disabled" ? true : false}
          ref={inputRef}
        />
        <Label
          className="label"
          htmlFor="input-id"
          tags={tags}
          inputValue={inputValue}
        >
          {label}
        </Label>
      </OverFlowWrapper>
      {inputState === "error" && (
        <Message inputState={inputState}>{errorMessageState}</Message>
      )}
      {inputState === "description" && (
        <Message inputState={inputState}>{descriptionMessage}</Message>
      )}
    </InputTagContainer>
  );
};
InputTag.propTypes = {
  label: PropTypes.string,
  inputStateValue: PropTypes.oneOf([
    "default",
    "disabled",
    "error",
    "description",
  ]),
  errorMessage: PropTypes.string,
  descriptionMessage: PropTypes.string,
  tagsMaxCount: PropTypes.number,
};

export default InputTag;
