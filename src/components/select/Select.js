import { useState, useRef } from "react";
import {
  SelectContainer,
  SelectWrapper,
  InputField,
  InputLabel,
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
  const [selectedResult, setSelectedResults] = useState(arrayOfFalse);
  const [selectedResultValue, setSelectedResultValue] = useState("");
  const inputRef = useRef();

  const selectResult = (e, index, value) => {
    e.preventDefault();

    setSelectedResultValue(value);
    let newArray = arrayOfFalse;
    // toggle the checkmark for the selected item
    newArray[index] = true;
    setSelectedResults(newArray.map((x) => x));

    if (selectedResult !== arrayOfFalse) {
      // set the input to the seleted result
      inputRef.current.value = value;
      // show the closeButton because inputRef will not cause a render for
      // handleInput, and in turn, not show the closeButton
      setCloseButton(true);
    }
  };

  const handleInput = (e) => {
    // if the input field has text, show the results window and the close button
    if (e.target.value.length > 0) {
      setResultsWindow(true);
      setCloseButton(true);
      // else hide the results window and the close button
    } else {
      setResultsWindow(false);
      setCloseButton(false);
    }
    if (e.target.value !== selectedResultValue) {
      setResultsWindow(true);
      setSelectedResults(arrayOfFalse);
    }
  };

  const handleClose = () => {
    // reset selected result on close
    setSelectedResults(arrayOfFalse);
    // hide results window on close
    setResultsWindow(false);
    // hide the close button on close
    setCloseButton(false);
    // set the input value to blank
    inputRef.current.value = "";
    // target the inputfield with the cursor
    inputRef.current.blur();
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
          className="input__field"
          id="input__field"
          ref={inputRef}
          onChange={handleInput}
          placeholder=" "
          onFocus={(e) => {
            e.target.placeholder = "Example, USA";
            setResultsWindow(true);
          }}
          onBlur={(e) => {
            e.target.placeholder = " ";
            setResultsWindow(false);
          }}
        />
        <InputLabel className="input__label" for="input_field">
          {label}
        </InputLabel>
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
