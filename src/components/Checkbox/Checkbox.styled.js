import styled from "styled-components";

export const CheckboxWrapper = styled.div`
  position: relative;
`;
export const CheckboxField = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;

  &:checked ~ .checkbox__label:before {
    outline-color: #6e41e2;
    background-color: #6e41e2;
  }
  &:checked ~ .checkbox__label:after {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 20px;
    content: "✔";
    color: white;
  }
  &:indeterminate ~ .checkbox__label:after {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 20px;
    content: "x";
    color: white;
  }

  /* style different responsive states for checkbox */
  &:focus + .checkbox__label:before {
    outline: 2px solid rgba(17, 17, 17, 0.48);
  }
  &:not(:checked):disabled + .checkbox__label:before {
    outline: 1px solid #d4d4d4;
    background-color: white;
  }
  &:disabled + .checkbox__label {
    color: gray;
    cursor: not-allowed;
  }
  &:checked + .checkbox__label:hover:before {
    background-color: #5835b0;
  }
  &:checked + .checkbox__label:active:before {
    background-color: #472c8a;
  }
  &:checked:focus + .checkbox__label:before {
    outline: 2px solid #5835b0;
  }
  &:checked:disabled + .checkbox__label:before {
    opacity: 0.56;
  }
`;

export const CheckboxLabel = styled.label`
  padding-left: 5px;
  color: ${(props) => (props.checkboxState == "error" ? "#DB524E" : "#white")};

  &:before {
    cursor: pointer;
    border-radius: 4px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    background-color: ${(props) =>
      props.checkboxState == "error" ? "#F9E3E3" : "white;"};
    width: 18px;
    height: 18px;
    outline: 1px solid
      ${(props) => (props.checkboxState == "error" ? "#F9E3E3" : "#d4d4d4;")};
  }

  /* style different responsive states for checkbox */
  &:hover:before {
    background-color: #fafafa;
  }

  &:active:before {
    background-color: #f1f1f1;
  }
`;
