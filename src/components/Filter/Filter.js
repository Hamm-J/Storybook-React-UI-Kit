import React from "react";
import {
  FilterGroupWrapper,
  FilterContainer,
  Label,
  InputField,
} from "./Filter.styled";
import PropTypes from "prop-types";

const Filter = ({ items, filterGroup }) => {
  return (
    <FilterGroupWrapper>
      {items.map((item, itemIdx) => (
        <FilterContainer key={itemIdx}>
          <InputField name={filterGroup} id={item} />
          <Label
            htmlFor={item}
            position={
              // If the item is the first in the group, give it the left border
              // styling
              itemIdx === 0
                ? "left"
                : // If the item is the last in the group, give it the right
                // border styling
                itemIdx + 1 === items.length
                ? "right"
                : // If the item is not in the first or last position, give the
                  // item the center border styling
                  "center"
            }
          >
            {item}
          </Label>
        </FilterContainer>
      ))}
    </FilterGroupWrapper>
  );
};

Filter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  filterGroup: PropTypes.string,
};

export default Filter;
