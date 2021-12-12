import styled from 'styled-components';

export const ButtonStyled = styled.button`
   border: none;
   color: ${(props) => props.fontColor};
   background-color: ${(props) => props.backgroundColor};
   font-size: ${(props) => props.fontSize}px;
   padding: ${(props) => props.scale * 0.5}rem ${(props) => props.scale * 1}rem;

   &:hover {
       opacity: 0.7;
   }
`
