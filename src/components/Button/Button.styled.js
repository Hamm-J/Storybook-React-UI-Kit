import styled from 'styled-components';
import { Add } from '@styled-icons/material';

export const ButtonStyled = styled.button`
   border: none;
   border-radius: .3rem;

   /* Attributes with props/args */
   color: ${(props) => props.fontColor};
   background-color: ${(props) => props.backgroundColor};
   font-size: ${(props) => props.fontSize}px;
   padding: ${(props) => props.scale * 0.5}rem ${(props) => props.scale * 1}rem;

`;

export const ButtonLabelStyled = styled.span`

   &:hover {
       opacity: 0.7;
   }
`;

export const AddStyled = styled(Add)`
    width: 20px;

    &:hover {
        opacity: 0.7;
    }
`;