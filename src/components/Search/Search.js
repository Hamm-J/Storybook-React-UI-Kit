import { useState, useRef } from "react";
import PropTypes from "prop-types";
import {
  SearchContainer,
  InputWrapper,
  InputField,
  InputLabel,
  SearchIcon,
  CloseIcon,
  ResultsWrapper,
  Result,
  ResultText,
  ResultLoading,
  NoResults,
} from "./Search.styled";

const Search = ({ label, results, resultsState, handleResult }) => {
  const [resultsWindow, setResultsWindow] = useState(false);
  const inputRef = useRef();

  const loadingArray = Array(3).fill(0);

  const handleInput = (e) => {
    if (e.target.value.length > 0) {
      setResultsWindow(true);
    } else {
      setResultsWindow(false);
    }
  };

  const handleClose = () => {
    setResultsWindow(false);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <SearchContainer onClick={() => handleFocusInput()}>
      <InputWrapper>
        <InputField
          className="input-field"
          id="input-field"
          placeholder=" "
          onChange={handleInput}
          ref={inputRef}
        />
        <SearchIcon className="search-icon" />
        <InputLabel className="input-label" htmlFor="input-field">
          {label}
        </InputLabel>
        <CloseIcon className="close-icon" onClick={handleClose} />
      </InputWrapper>
      {resultsWindow && (
        <ResultsWrapper>
          {resultsState === "found" && (
            <>
              {results.map((result, resultIdx) => (
                <Result
                  key={resultIdx}
                  resultsState={resultsState}
                  onClick={(e) => handleResult(e)}
                  tabIndex="0"
                >
                  <ResultText>{result}</ResultText>
                </Result>
              ))}
            </>
          )}

          {resultsState === "loading" && (
            <>
              {loadingArray.map((result, resultIdx) => (
                <Result key={resultIdx} resultsState={resultsState}>
                  <ResultLoading />
                </Result>
              ))}
            </>
          )}

          {resultsState === "noResults" && <NoResults>No results</NoResults>}
        </ResultsWrapper>
      )}
    </SearchContainer>
  );
};

Search.propTypes = {
  label: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.string),
  resultsState: PropTypes.oneOf(["found", "loading", "noResults"]),
};

export default Search;
