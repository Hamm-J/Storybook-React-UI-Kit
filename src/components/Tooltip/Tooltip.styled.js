import styled from "styled-components";

export const TooltipContainer = styled.div`
  background-color: white;
  border: 1px solid #f1f1f1;
  border-radius: 4px;
  height: 44px;
  padding: 0px 12px 0px 12px;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  filter: drop-shadow(0px 4px 4px rgba(51, 51, 51, 0.04))
    drop-shadow(0px 4px 16px rgba(51, 51, 51, 0.08));
`;

export const Label = styled.label`
  color: black;
`;

export const PointerTopLeft = styled.div`
  position: relative;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    /* background-color: red; */
    top: -27px; // Offset top the height of the pointer's border-width
    right: -6px;
    z-index: 3;
    width: 0;
    height: 0;
    overflow: hidden;
    border: solid 6px transparent; /* set the width of the pointer */
    border-top: 0;
    border-bottom-color: white;
  }

  &:after {
    /* background-color: blue; */
    top: -28px; /* Offset of pointer border-width + bubble border-width */
    right: -6px;
    z-index: 1;
    border-bottom-color: #f1f1f1;
  }
`;

export const PointerTopRight = styled.div`
  position: relative;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    /* background-color: red; */
    top: -27px; /* Offset top the height of the pointer's border-width */
    left: -6px;
    z-index: 3;
    width: 0;
    height: 0;
    overflow: hidden;
    border: solid 6px transparent; /* set the width of the pointer */
    border-top: 0;
    border-bottom-color: white;
  }

  &:after {
    /* background-color: blue; */
    top: -28px; /* Offset of pointer border-width + bubble border-width */
    left: -6px;
    z-index: 1;
    border-bottom-color: #f1f1f1;
  }
`;

export const PointerBottomLeft = styled.div`
  position: relative;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    /* background-color: red; */
    bottom: -27px; // Offset top the height of the pointer's border-width
    right: -6px;
    z-index: 3;
    width: 0;
    height: 0;
    overflow: hidden;
    border: solid 6px transparent; /* set the width of the pointer */
    border-bottom: 0;
    border-top-color: white;
  }

  &:after {
    /* background-color: blue; */
    bottom: -26px; /* Offset of pointer border-width + bubble border-width */
    right: -6px;
    z-index: 1;
    border-bottom-color: #f1f1f1;
  }
`;

export const PointerBottomRight = styled.div`
  position: relative;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    /* background-color: red; */
    bottom: -27px; // Offset top the height of the pointer's border-width
    right: -6px;
    z-index: 3;
    width: 0;
    height: 0;
    overflow: hidden;
    border: solid 6px transparent; /* set the width of the pointer */
    border-bottom: 0;
    border-top-color: white;
  }

  &:after {
    /* background-color: blue; */
    bottom: -26px; /* Offset of pointer border-width + bubble border-width */
    right: -6px;
    z-index: 1;
    border-bottom-color: #f1f1f1;
  }
`;

export const PointerSideLeft = styled.div`
  position: relative;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    /* background-color: red; */
    bottom: -6px; // Offset top the height of the pointer's border-width
    right: 12px;
    z-index: 3;
    width: 0;
    height: 0;
    overflow: hidden;
    border: solid 6px transparent; /* set the width of the pointer */
    border-left: 0;
    border-right-color: white;
  }

  &:after {
    /* background-color: blue; */
    bottom: -6px; /* Offset of pointer border-width + bubble border-width */
    right: 13px;
    z-index: 1;
    border-right-color: #f1f1f1;
  }
`;

export const PointerSideRight = styled.div`
  position: relative;

  &:before,
  &:after {
    content: "";
    display: block;
    position: absolute;
    /* background-color: red; */
    bottom: -6px; // Offset top the height of the pointer's border-width
    left: 12px;
    z-index: 3;
    width: 0;
    height: 0;
    overflow: hidden;
    border: solid 6px transparent; /* set the width of the pointer */
    border-right: 0;
    border-left-color: white;
  }

  &:after {
    /* background-color: blue; */
    bottom: -6px; /* Offset of pointer border-width + bubble border-width */
    left: 13px;
    z-index: 1;
    border-left-color: #f1f1f1;
  }
`;
