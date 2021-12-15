import styled from 'styled-components';
import { Close } from '@styled-icons/material';

export const TagWrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    height: 24px;
    align-items: center;
    background-color: #6E41E2;
    padding: 5px 5px 5px 10px;
    border-radius: 4px;
    color: white;

    &:hover {
        background-color: #5835B0;
    }
`;

export const TagLabel = styled.label`
    padding-right: 2px;
`;

export const TagCloseSpan = styled.span`
`;

export const CloseIcon = styled(Close)`
    cursor: pointer;
    width: 24px;
`;