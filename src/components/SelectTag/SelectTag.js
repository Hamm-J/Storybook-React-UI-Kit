import { useState, useRef, useEffect } from "react";
import {
  SelectTagContainer,
  InputWrapper,
  TagWrapper,
  OverFlowWrapper,
  InputField,
  Label,
  CloseIcon,
  ArrowIcon,
  DoneIcon,
  ResultsWrapper,
  Result,
  ResultText,
} from "./SelectTag.styled";
import PropTypes from "prop-types";
import Tag from "../Tag/Tag";

const SelectTag = ({ label, resultsArray, handleDelete }) => {
  const [resultsWindow, setResultsWindow] = useState(false);
  const [closeButton, setCloseButton] = useState(false);
  const [results, setResults] = useState([]);
  const arrayOfFalse = new Array(resultsArray.length).fill(false);
  const [selectedResult, setSelectedResult] = useState(arrayOfFalse);
  const inputRef = useRef();

  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);
  const [isKeyReleased, setIsKeyReleased] = useState(false);

  useEffect(() => {
    setResults(resultsArray);
  }, [resultsArray]);

  useEffect(() => {
    if (tags.length) {
      setCloseButton(true);
    }
  }, [tags]);

  const selectResult = (e, index, value) => {
    if (e.key === "Enter" || e.type === "mousedown") {
      e.preventDefault();

      // create a copy of selectedResult for updating with the new bool
      let selectedResultCopy = selectedResult;
      // toggle the checkmark for the selected item
      selectedResultCopy[index] = !selectedResultCopy[index];
      setSelectedResult(selectedResultCopy.map((x) => x));

      // create a lowercase versions of value and tags for checking for different
      // input spellings
      const lowerCaseValue = value.toLowerCase();
      const lowerCaseTags = tags.map((tag) => tag.toLowerCase());

      // if the selected value is not already in the tags array, add the value to
      // the tags array
      if (!lowerCaseTags.includes(lowerCaseValue)) {
        setTags((prevState) => [...prevState, value]);
        setInputValue("");
        // if the selected value is already in the tags array, remove the value from
        // the tags array
      } else {
        const tagsCopy = [...lowerCaseTags];
        const filteredTags = tagsCopy.filter((e) => e !== lowerCaseValue);
        setTags(filteredTags);
      }

      // show the closeButton because inputRef will not cause a render for
      // handleInput, and in turn, not show the closeButton
      if (selectedResult !== arrayOfFalse && value.length) {
        setCloseButton(true);
      }
    }
  };

  const handleInput = (e) => {
    const { value } = e.target;
    // track the input state
    setInputValue(value);
    // if the input field has text or the tags array has items, show the results
    // window and the close button
    if (value.length || tags.length) {
      setResultsWindow(true);
      setCloseButton(true);
      // else hide the results window and the close button
    } else {
      setResultsWindow(false);
      setCloseButton(false);
    }
  };

  const handleTags = (e) => {
    const { key } = e;
    // make sure that the input is not blank
    const trimmedInput = inputValue.trim();
    // create a lowercase version of the trimmedInput and tags array to check
    // for different spellings of the input
    const lowerCaseTrimmedInput = trimmedInput.toLowerCase();
    const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
    const lowerCaseResults = results.map((result) => result.toLowerCase());

    // On press of "Enter" and a non-blank input field, add the current input
    // value to the tags array
    if (
      key === "Enter" &&
      trimmedInput.length &&
      !lowerCaseTags.includes(lowerCaseTrimmedInput)
    ) {
      e.preventDefault();

      // Add trimmed input to tags array
      setTags((prevState) => [...prevState, trimmedInput]);
      setInputValue("");

      // If the user inputs a result option, update the respective result
      // checkmark to reflect the tag
      if (lowerCaseResults.includes(lowerCaseTrimmedInput)) {
        const resultIndex = lowerCaseResults.indexOf(lowerCaseTrimmedInput);
        let selectedResultCopy = selectedResult;

        selectedResultCopy[resultIndex] = !selectedResultCopy[resultIndex];

        setSelectedResult(selectedResultCopy.map((x) => x));
      }
    }

    // On press of "Backspace", with an empty input field, and tags that exist
    // remove last tag from the array and set the removed tag to the current
    // input field.
    // Also, check if the user has been holding down "Backspace". If yes, stop
    // user from deleting more than one tag without repressing "Backspace"
    if (
      key === "Backspace" &&
      !inputValue.length &&
      tags.length &&
      isKeyReleased
    ) {
      e.preventDefault();
      // remove popped tag when hitting backspace
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();
      setTags(tagsCopy);
      setInputValue(poppedTag);

      // update the selectedResult state to remove the checkmark from the result
      // when Backspacing the tag.
      const lowerCaseResults = results.map((result) => result.toLowerCase());
      const lowerCasePoppedTag = poppedTag.toLowerCase();

      const resultIndex = lowerCaseResults.indexOf(lowerCasePoppedTag);
      let selectedResultCopy = selectedResult;
      if (selectedResultCopy[resultIndex]) {
        selectedResultCopy[resultIndex] = false;
      } else {
        selectedResultCopy[resultIndex] = true;
      }
      setSelectedResult(selectedResultCopy.map((x) => x));
    }

    setIsKeyReleased(false);
  };

  const handleKeyRelease = () => {
    setIsKeyReleased(true);
  };

  const handleClose = () => {
    // reset selected result on close
    setSelectedResult(arrayOfFalse);
    // hide results window on close
    setResultsWindow(false);
    // hide the close button on close
    setCloseButton(false);
    // set the input value to blank
    setInputValue("");
    setTags([]);
    // target the inputfield with the cursor
    inputRef.current.focus();
  };

  const handleArrow = (e) => {
    // e.preventDefault();
    // if there are input values, toggle the state of the resultsWindow
    setResultsWindow(!resultsWindow);
  };

  return (
    <SelectTagContainer>
      <InputWrapper>
        <OverFlowWrapper>
          <TagWrapper>
            {tags.map((tag, tagIdx) => (
              <Tag
                key={tagIdx}
                label={tag}
                handleClose={(e) => handleDelete(e)}
              />
            ))}
          </TagWrapper>
          <InputField
            className="input-field"
            id="input-field"
            ref={inputRef}
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleTags}
            onKeyUp={handleKeyRelease}
            placeholder=" "
            onFocus={(e) => {
              e.target.placeholder = " ";
              setResultsWindow(true);
            }}
          />
          <Label className="label" forHtml="input-field" tags={tags}>
            {label}
          </Label>
        </OverFlowWrapper>
        {closeButton && <CloseIcon onClick={() => handleClose()} />}
        <ArrowIcon
          resultsWindow={resultsWindow}
          onClick={(e) => handleArrow(e)}
        />
      </InputWrapper>

      {resultsWindow === true && (
        <ResultsWrapper>
          {results.map((result, resultIdx) => (
            <Result
              key={resultIdx}
              // use onMouseDown instead of onClick because onMouseDown fires
              // before onBlur. This is needed to make resultsWindow state
              // to operate as intended when selecting a result.
              onMouseDown={(e) => selectResult(e, resultIdx, result)}
              tabIndex="0"
              onKeyDown={(e) => selectResult(e, resultIdx, result)}
            >
              <ResultText>{result}</ResultText>
              {selectedResult[resultIdx] === true && <DoneIcon />}
            </Result>
          ))}
        </ResultsWrapper>
      )}
    </SelectTagContainer>
  );
};

SelectTag.propTypes = {
  label: PropTypes.string,
  resultsArray: PropTypes.arrayOf(PropTypes.string),
};

export default SelectTag;
