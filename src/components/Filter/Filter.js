import React from "react";
import {
  FilterGroupWrapper,
  FilterWrapper,
  FilterLabel,
  FilterInputField,
} from "./Filter.styled";
import PropTypes from "prop-types";

const Filter = ({ items, filterGroup }) => {
  return (
    <div>
      <FilterGroupWrapper>
        {items.map((item, itemIdx) => (
          <FilterWrapper key={itemIdx}>
            <FilterInputField name={filterGroup} id={item} />
            <FilterLabel
              for={item}
              position={
                itemIdx == 0
                  ? "left"
                  : itemIdx + 1 == items.length
                  ? "right"
                  : "center"
              }
            >
              {item}
            </FilterLabel>
          </FilterWrapper>
        ))}
      </FilterGroupWrapper>
    </div>
  );
};

Filter.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  filterGroup: PropTypes.string,
};

export default Filter;
