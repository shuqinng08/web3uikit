import styled, { css } from 'styled-components';
import resetCSS, { resetButtonCSS } from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import { InputProps, LabelProps } from './types';

export const DivWrapperStyled = styled.div<Pick<InputProps, 'state' | 'size'>>`
    ${resetCSS}
    border-radius: 16px;
    border: 1px solid;
    display: flex;
    max-width: 100%;
    position: relative;
    transition: all 0.2s linear;
    min-width: fit-content;

    border-color: ${({ state }) => {
        switch (state) {
            case 'error':
                return color.red;
            case 'confirmed':
                return color.green;
            case 'disabled':
                return color.greyDisabled;
            default:
                return color.greyLight;
        }
    }};

    & > * > * > * {
        ${(p) => p.state === 'disabled' && ` fill: ${color.greyDisabled};`};
    }

    &:hover {
        border-color: ${(p) => p.state !== 'disabled' && color.blue};

        strong {
            overflow: visible;
            text-overflow: unset;
            white-space: wrap;
        }
    }

    &:hover > .input_prefixIcon > svg {
        fill: ${(p) => !p?.state && color.blue};
    }

    &:focus-within {
        border-width: 0px;
        outline: ${color.blue} solid 2px;
        /* border-color: ; */

        label {
            color: ${color.blue};
        }
    }

    &:hover {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}

        label {
            ${(p) => !p?.state && `color: ${color.blue};`}
        }
    }

    &:focus-within {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
        }
    }

    input {
        & + label {
            color: ${({ state }) => {
                switch (state) {
                    case 'error':
                        return color.red;
                    case 'confirmed':
                        return color.green;
                    case 'disabled':
                        return color.greyDisabled;
                    default:
                        return color.grey;
                }
            }};
        }
    }

    ${({ size }) => {
        switch (size) {
            case 'large':
                return css`
                    height: 56px;
                    padding: 14px 16px;
                    & > label {
                        top: 15px;
                    }
                `;
            case 'regular':
            default:
                return css`
                    height: 40px;
                    padding: 8px 16px;
                    & > label {
                        top: 8px;
                    }
                `;
        }
    }}
`;

export const LabelStyled = styled.label<LabelProps>`
    ${resetCSS}
    ${fonts.text}
    height: 24px;
    left: ${({ hasPrefix }) => (hasPrefix ? '48px' : '16px')};
    pointer-events: none;
    position: absolute;
    z-index: 1;
    background-color: ${color.white};
    /* top: 15px; */
    transition: all 0.1s ease-out;
    /* z-index: 3; */
    /* &: before {
        content: '';
        height: 2px;
        width: 100%;
        left: 0;
        top: 10px;
        background-color: ${color.white};
        position: absolute;
        z-index: -1;
    } */
`;

export const InputStyled = styled.input`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
    transition: all 0.1s ease-out;
    width: 100%;

    &:focus,
    .input_filled & {
        + label {
            font-size: 14px;
            height: 18px;
            line-height: 1;
            padding: 2px 4px;
            top: -12px;
            left: 12px;
        }
    }

    &:focus {
        &::placeholder {
            display: none;
            visibility: visible;
            color: ${color.grey};
        }
    }
`;

const inputIconStyle = css`
    ${resetCSS}
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-width: 24px;
    width: 100%;
    /* margin: 0 12px; */

    & :first-child {
        fill: ${color.grey};
        transition: fill 0.2s ease-out;
        width: 100%;
        height: 100%;
    }
`;

export const DivStyled = styled.div`
    ${inputIconStyle}
    margin-right: 12px;
`;

export const ButtonStyled = styled.button`
    ${resetButtonCSS}
    ${inputIconStyle}
    position: relative;
    margin-left: 24px;

    &:hover > svg {
        fill: ${color.blue};
    }
    &:before {
        border-left: 1px solid ${color.paleBlue2};
        content: '';
        height: 24px;
        left: -12px;
        position: absolute;
        width: 0;
    }
`;

export const VisibilityIcon = styled.button`
    ${resetButtonCSS}
    ${inputIconStyle}
    position: relative;
    margin-left: 12px;

    &:hover > svg {
        fill: ${color.blue};
    }
`;

export const StrongStyled = styled.strong`
    ${resetCSS}
    ${fonts.text}
    bottom: -23px;
    color: ${color.red};
    font-size: 12px;
    height: 24px;
    left: 16px;
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: calc(100% - 26px);
`;
