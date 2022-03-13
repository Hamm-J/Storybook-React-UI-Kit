import { useState } from "react";
import {
  MenuContainer,
  ItemRow,
  ItemLabel,
  SectionTitle,
  DoneIcon,
} from "./ContextMenu.styled";
import PropTypes from "prop-types";

const ContextMenu = ({ multipleLists, countryItems, timeItems }) => {
  // create an array of false values the length of countryItems for the initial
  // state of selected
  const arrayOfFalse = new Array(countryItems.length).fill(false);
  const [selectedCountry, setSelectedCountry] = useState(arrayOfFalse);
  const [selectedTime, setSelectedTime] = useState(arrayOfFalse);

  const selectCountry = (oldBool, index) => {
    // create an array of false values
    let newArray = arrayOfFalse;
    // Adjust the value you want flipped.
    newArray[index] = !oldBool;
    // Update the state with these new values.
    setSelectedCountry(newArray.map((x) => x));
  };

  const selectTime = (oldBool, index) => {
    // create an array of false values
    let newArray = arrayOfFalse;
    // Adjust the value you want flipped.
    newArray[index] = !oldBool;
    // Update the state with these new values.
    setSelectedTime(newArray.map((x) => x));
  };

  return (
    <MenuContainer>
      {multipleLists && <SectionTitle>Time</SectionTitle>}
      {timeItems.map((item, itemIdx) => (
        <ItemRow
          key={itemIdx}
          onClick={() => selectTime(selectedTime[itemIdx], itemIdx)}
        >
          <ItemLabel>{item}</ItemLabel>
          {selectedTime[itemIdx] === true && <DoneIcon />}
        </ItemRow>
      ))}
      {multipleLists && <SectionTitle>Country</SectionTitle>}
      {multipleLists && (
        <>
          {countryItems.map((item, itemIdx) => (
            <ItemRow
              key={itemIdx}
              onClick={() => selectCountry(selectedCountry[itemIdx], itemIdx)}
            >
              <ItemLabel>{item}</ItemLabel>
              {selectedCountry[itemIdx] === true && <DoneIcon />}
            </ItemRow>
          ))}
        </>
      )}
    </MenuContainer>
  );
};

ContextMenu.propTypes = {
  multipleLists: PropTypes.bool,
  countryItems: PropTypes.arrayOf(PropTypes.string),
  timeItems: PropTypes.arrayOf(PropTypes.string),
};

export default ContextMenu;
