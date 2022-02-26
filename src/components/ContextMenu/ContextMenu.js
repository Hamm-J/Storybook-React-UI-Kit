import { useState } from "react";
import {
  MenuWrapper,
  MenuItemRow,
  MenuItemLabel,
  MenuSectionTitle,
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
    let newArray = arrayOfFalse; // create an array of false values
    newArray[index] = !oldBool; //Adjusting the value you want flipped.
    setSelectedCountry(newArray.map((x) => x)); //Updating the state with these new values.
  };

  const selectTime = (oldBool, index) => {
    let newArray = arrayOfFalse; // create an array of false values
    newArray[index] = !oldBool; //Adjusting the value you want flipped.
    setSelectedTime(newArray.map((x) => x)); //Updating the state with these new values.
  };

  return (
    <div>
      <MenuWrapper>
        {multipleLists && <MenuSectionTitle>Time</MenuSectionTitle>}
        {timeItems.map((item, itemIdx) => (
          <MenuItemRow
            key={itemIdx}
            onClick={() => selectTime(selectedTime[itemIdx], itemIdx)}
          >
            <MenuItemLabel>{item}</MenuItemLabel>
            {selectedTime[itemIdx] === true && <DoneIcon />}
          </MenuItemRow>
        ))}
        {multipleLists && <MenuSectionTitle>Country</MenuSectionTitle>}
        {multipleLists && (
          <>
            {countryItems.map((item, itemIdx) => (
              <MenuItemRow
                key={itemIdx}
                onClick={() => selectCountry(selectedCountry[itemIdx], itemIdx)}
              >
                <MenuItemLabel>{item}</MenuItemLabel>
                {selectedCountry[itemIdx] === true && <DoneIcon />}
              </MenuItemRow>
            ))}
          </>
        )}
      </MenuWrapper>
    </div>
  );
};

ContextMenu.propTypes = {
  multipleLists: PropTypes.bool,
  countryItems: PropTypes.arrayOf(PropTypes.string),
  timeItems: PropTypes.arrayOf(PropTypes.string),
};

export default ContextMenu;
