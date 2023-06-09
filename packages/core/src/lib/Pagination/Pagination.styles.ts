import styled, { css } from 'styled-components';
import { color, fonts, resetCSS } from '@web3uikit/styles';
import { IPaginationStyleProps } from './types';

const DivStyledPagination = styled.div`
    ${resetCSS}
    ${fonts.text}
    align-items: center;
    color: ${color.navy40};
    display: flex;
    font-size: 14px;
    font-weight: 550;
    line-height: 24px;
    :first-child {
        margin-left: 0px;
    }
`;

const DivStyledPaginationText = styled.div<IPaginationStyleProps>`
    ${resetCSS}
    cursor: ${(props) => (props.isActive ? 'pointer' : 'cursor')};
    font-size: 16px;
    margin: 0px 8px;
    opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const DivStyledPaginationTag = styled.div<IPaginationStyleProps>`
    ${resetCSS}
    align-items: center;
    background-color: ${(props) => !props.isActive && color.aero10};
    border-radius: 12px;
    border: 2px solid
        ${(props) => (props.isActive ? color.navy40 : 'transparent')};
    cursor: ${(props) => !props.isActive && !props.isDot && 'pointer'};
    display: flex;
    margin: 0px 8px;
    min-height: 32px;
    min-width: 32px;
    max-width: 32px;
    ${(props) =>
        !props.isDot &&
        css`
            :hover {
                background-color: ${color.aero10};
            }
        `};
    div {
        margin: auto;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`;

export default {
    DivStyledPagination,
    DivStyledPaginationText,
    DivStyledPaginationTag,
};
