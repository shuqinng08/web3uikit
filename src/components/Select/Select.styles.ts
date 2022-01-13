import resetCSS from '../../styles/reset';
import fonts from '../../styles/fonts';
import color from '../../styles/colors';
import styled, { css } from 'styled-components';
import { SelectProps, LabelProps, SelectedItemProps } from './types';

export const SelectWrapper = styled.div<Pick<SelectProps, 'state'>>`
    ${resetCSS}
    display: inline-block;
    position: relative;
`;

export const LabelStyled = styled.label<LabelProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.white};
    height: 24px;
    left: 12px;
    line-height: 1;
    padding: 2px 4px;
    pointer-events: none;
    position: absolute;
    padding: 0 4px;
    transition: all 0.1s ease-out;
    ${({ hasSelectedIndex }) =>
        hasSelectedIndex ? `top: -12px; font-size: 14px;` : `top: 20px;`};
`;

export const SelectStyled = styled.div`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    overflow: hidden;
`;

export const SelectedItem = styled.div<SelectedItemProps>`
    ${resetCSS}
    ${fonts.text}
    background-color: transparent;
    border-radius: 16px;
    border: 2px solid;
    cursor: pointer;
    display: flex;
    height: 56px;
    overflow: hidden;
    padding: 14px 50px 14px 16px;
    transition: all 0.1s linear;

    border-color: ${({ state }) => {
        switch (state) {
            case 'error':
                return color.red;
            case 'confirmed':
                return color.green;
            case 'disabled':
                return color.greyDisabled;
            default:
                return color.blueSky;
        }
    }};

    ${({ state }) =>
        state === 'disabled' &&
        `& * {fill: ${color.greyDisabled};} color: ${color.greyDisabled} !important;`};

    &:hover {
        border-color: ${(p) => p.state !== 'disabled' && color.blue};
    }

    &:focus {
        border-color: ${color.blue};

        + label {
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

    &:focus {
        ${(p) => p.state === 'error' && `border-color: ${color.red};`}
        ${(p) => p.state === 'confirmed' && `border-color: ${color.green};`}
        & + label {
            ${(p) => p.state === 'error' && `color: ${color.red};`}
            ${(p) => p.state === 'confirmed' && `color: ${color.green};`}
        }
    }

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
`;

const iconStyle = css`
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    max-height: 24px;
    max-width: 24px;
    width: 100%;
`;

export const PrefixIcon = styled.div`
    ${resetCSS}
    ${iconStyle}
    margin-right: 8px;
    & :first-child {
        width: 100%;
        height: 100%;
    }
`;

export const DropDownIcon = styled.div`
    ${iconStyle}
    position: absolute;
    right: 16px;
`;

export const ErrorLabel = styled.label`
    ${resetCSS}
    ${fonts.text}
    bottom: -23px;
    color: ${color.red};
    font-size: 12px;
    height: 24px;
    left: 16px;
    pointer-events: none;
    position: absolute;
`;

export const Options = styled.div`
    ${resetCSS}
    ${fonts.text}
    background-color: ${color.blueLight};
    border-radius: 16px;
    border: 2px solid ${color.blueSky};
    display: flex;
    flex-direction: column;
    height: fit-content;
    justify-content: space-around;
    left: 0;
    margin-top: 10px;
    position: absolute;
    top: 100%;
    width: 100%;
    z-index: 10;
`;

export const Option = styled.div`
    ${resetCSS}
    align-items: center;
    cursor: pointer;
    display: flex;
    padding: 12px 0 12px 20px;
    &:hover {
        background-color: rgba(128, 128, 128, 0.1);
    }
    &:first-child {
        border-top-right-radius: 7px;
        border-top-left-radius: 7px;
    }
    &:last-child {
        border-bottom-right-radius: 7px;
        border-bottom-left-radius: 7px;
    }
`;

const SelectStyles = {
    DropDownIcon,
    ErrorLabel,
    LabelStyled,
    Option,
    Options,
    PrefixIcon,
    SelectedItem,
    SelectStyled,
    SelectWrapper,
};

export default SelectStyles;
