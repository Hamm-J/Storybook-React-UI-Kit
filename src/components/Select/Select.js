import { useState, useRef } from "react";
import {
  SelectContainer,
  SelectWrapper,
  InputField,
  Label,
  CloseIcon,
  ArrowIcon,
  DoneIcon,
  ResultsWrapper,
  Result,
  ResultText,
} from "./Select.styled";
import PropTypes from "prop-types";

const Select = ({ label, results }) => {
  const [resultsWindow, setResultsWindow] = useState(false);
  const [closeButton, setCloseButton] = useState(false);
  const arrayOfFalse = new Array(results.length).fill(false);
  const [selectedResult, setSelectedResult] = useState(arrayOfFalse);
  const [selectedResultValue, setSelectedResultValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef();

  const selectResult = (e, index, value) => {
    if (e.key === "Enter" || e.type === "mousedown") {
      e.preventDefault();

      setSelectedResultValue(value);
      let newArray = arrayOfFalse;
      // toggle the checkmark for the selected item
      newArray[index] = true;
      setSelectedResult(newArray.map((x) => x));

      if (selectedResult !== arrayOfFalse) {
        // set the input to the seleted result
        setInputValue(value);
        // show the closeButton because inputRef will not cause a render for
        // handleInput, and in turn, not show the closeButton
        setCloseButton(true);
      }
    }
  };

  const handleInput = (e) => {
    const { value } = e.target;
    setInputValue(value);
    // if the input field has text, show the results window and the close button
    if (value.length > 0) {
      setResultsWindow(true);
      setCloseButton(true);
      // else hide the results window and the close button
    } else {
      setResultsWindow(false);
      setCloseButton(false);
    }
    if (value !== selectedResultValue) {
      setResultsWindow(true);
      setSelectedResult(arrayOfFalse);
    } else {
      setResultsWindow(false);
    }
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
    // target the inputfield with the cursor
    inputRef.current.focus();
  };

  const handleArrow = (e) => {
    // e.preventDefault();
    // if there are input values, toggle the state of the resultsWindow
    setResultsWindow(!resultsWindow);
  };

  return (
    <SelectContainer>
      <SelectWrapper>
        <InputField
          className="input-field"
          id="input-field"
          ref={inputRef}
          onChange={(e) => handleInput(e)}
          placeholder=" "
          value={inputValue}
          onFocus={(e) => {
            e.target.placeholder = "Example, USA";
            setResultsWindow(true);
          }}
          onBlur={(e) => {
            e.target.placeholder = " ";
            // setResultsWindow(false);
          }}
        />
        <Label className="label" htmlFor="input-field">
          {label}
        </Label>
        {closeButton && <CloseIcon onClick={() => handleClose()} />}
        <ArrowIcon
          resultsWindow={resultsWindow}
          onClick={(e) => handleArrow(e)}
        />
      </SelectWrapper>

      {resultsWindow === true && (
        <ResultsWrapper>
          {results.map((result, resultIdx) => (
            <>
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
            </>
          ))}
        </ResultsWrapper>
      )}
    </SelectContainer>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
