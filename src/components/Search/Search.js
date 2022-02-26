import react, { useState, useEffect, useRef } from "react";
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

const Search = ({ label, results, resultsState }) => {
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

  return (
    <div>
      <SearchContainer>
        <InputWrapper>
          <InputField
            className="input__field"
            id="input__field"
            placeholder=" "
            onChange={handleInput}
            ref={inputRef}
          />
          <SearchIcon className="search__icon" />
          <InputLabel className="input__label" for="input__field">
            {label}
          </InputLabel>
          <CloseIcon className="close__icon" onClick={handleClose} />
        </InputWrapper>
        {resultsWindow && (
          <ResultsWrapper>
            {resultsState == "found" && (
              <>
                {results.map((result, resultIdx) => (
                  <Result key={resultIdx} resultsState={resultsState}>
                    <ResultText>{result}</ResultText>
                  </Result>
                ))}
              </>
            )}

            {resultsState == "loading" && (
              <>
                {loadingArray.map((result, resultIdx) => (
                  <Result key={resultIdx} resultsState={resultsState}>
                    <ResultLoading />
                  </Result>
                ))}
              </>
            )}

            {resultsState == "noResults" && <NoResults>No results</NoResults>}
          </ResultsWrapper>
        )}
      </SearchContainer>
    </div>
  );
};

Search.propTypes = {
  label: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.string),
  resultsState: PropTypes.oneOf(["found", "loading", "noResults"]),
};

export default Search;
