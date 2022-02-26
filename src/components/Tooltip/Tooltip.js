import {
  TooltipContainer,
  Label,
  PointerTopLeft,
  PointerSideLeft,
  PointerBottomLeft,
  PointerSideRight,
  PointerTopRight,
  PointerBottomRight,
} from "./Tooltip.styled";
import PropTypes from "prop-types";

const Tooltip = ({ tooltipState, label }) => {
  return (
    <TooltipContainer>
      {tooltipState == "sideLeft" && <PointerSideLeft></PointerSideLeft>}
      {tooltipState == "topLeft" && <PointerTopLeft></PointerTopLeft>}
      {tooltipState == "bottomLeft" && <PointerBottomLeft></PointerBottomLeft>}
      <Label>{label}</Label>
      {tooltipState == "sideRight" && <PointerSideRight></PointerSideRight>}
      {tooltipState == "topRight" && <PointerTopRight></PointerTopRight>}
      {tooltipState == "bottomRight" && (
        <PointerBottomRight></PointerBottomRight>
      )}
    </TooltipContainer>
  );
};

Tooltip.propTypes = {
  tooltipState: PropTypes.oneOf([
    "sideLeft",
    "topLeft",
    "bottomLeft",
    "sideRight",
    "topRight",
    "bottomRight",
  ]),
  label: PropTypes.string,
};

export default Tooltip;
