import styled from "styled-components";

export const RadioWrapper = styled.div`
  width: 80px;
  height: 24px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled.input.attrs({ type: "radio" })`
  opacity: 0;

  // "radio" checked inner white circle
  &:checked ~ .radio__label:after {
    content: "";
    display: inline-block;
    background-color: white;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 7px;
  }

  &:checked ~ .radio__label:before {
    background-color: #6e41e2;
  }
  &:hover:not(:checked) ~ .radio__label:before {
    background-color: #6e41e2;
    opacity: 0.56;
  }
  &:hover:not(:checked) ~ .radio__label,
  &:hover:not(:checked) ~ .radio__label:before {
    cursor: pointer;
  }
  &:hover:checked ~ .radio__label:before {
    background-color: #5835b0;
  }

  &:disabled ~ .radio__label:before,
  &:disabled:hover ~ .radio__label:before,
  &:disabled ~ .radio__label:after,
  &:disabled:hover ~ .radio__label:after {
    background-color: #e3daf9;
    cursor: not-allowed;
  }

  &:disabled ~ .radio__label:after {
    opacity: 0;
  }

  &:focus ~ .radio__label:before {
    outline: 2px solid rgba(17, 17, 17, 0.48);
  }
`;

export const RadioLabel = styled.label`
  padding-top: 2px;
  // have -10px margin so that the label field overlaps with the :before element
  // this way the pointer cursor doesn't disappear when hovering between the
  // label and the :before element
  padding-left: 25px;
  margin-left: -10px;

  // "radio" circle
  &:before {
    content: "";
    display: inline-block;
    background-color: #e3daf9;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
  }
`;

export const RadioGroupWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.radioGroupDirection};
  gap: 10px;
`;
