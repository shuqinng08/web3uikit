import styled from 'styled-components';
import { RadiosProps } from '.';
import color from '../../styles/colors';
import fonts from '../../styles/fonts';
import resetCSS from '../../styles/reset';
import { TRadioLayouts } from './types';

type TStyleProps = Pick<TRadioLayouts, 'isCreditCardMode'>;

const FieldsetStyled = styled.fieldset`
    ${resetCSS};
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

const LegendStyled = styled.legend`
    ${resetCSS};
    ${fonts.heading}
    ${fonts.h3}
    color: ${color.grey};
    display: block;
    margin-bottom: 4px;
`;

const DivStyled = styled.div<Pick<RadiosProps, 'disabled'>>`
    position: relative;
    opacity: ${(props) => props.disabled && 0.5};
`;

const LabelStyled = styled.label<TStyleProps>`
    ${resetCSS};
    ${fonts.heading}
    ${fonts.text}
    align-content: center;
    color: ${color.greyDark};
    display: flex;
    line-height: 20px;
    margin-bottom: 12px;
    padding-left: ${(p) => (p.isCreditCardMode ? '0' : '28px')};
    position: relative;
    width: fit-content;

    &:before {
        background-color: ${color.blueLight};
        border-radius: 50%;
        border: 1px solid ${color.blueSky};
        content: '';
        display: block;
        height: 18px;
        left: ${(p) => (p.isCreditCardMode ? '20px' : '0')};
        position: absolute;
        top: ${(p) => (p.isCreditCardMode ? '20px' : '0')};
        transition: all 0.1s ease-out;
        width: 18px;
    }

    &:after {
        background-color: ${color.white};
        border-radius: 50%;
        content: '';
        display: block;
        height: 8px;
        left: ${(p) => (p.isCreditCardMode ? '26px' : '6px')};
        opacity: 0;
        position: absolute;
        top: ${(p) => (p.isCreditCardMode ? '26px' : '6px')};
        transition: all 0.2s ease-out;
        width: 8px;
    }

    &:hover {
        &:before {
            filter: brightness(95%);
        }
    }

    &:active {
        &:before {
            filter: brightness(90%);
        }
    }
`;

const RadioButtonStyled = styled.input`
    position: absolute;
    left: -100px;

    &:checked {
        & + label {
            &:before {
                background-color: ${color.green};
                border-color: ${color.greenLight};
            }
            &:after {
                opacity: 1;
            }
        }
    }
`;

export default {
    DivStyled,
    FieldsetStyled,
    LabelStyled,
    LegendStyled,
    RadioButtonStyled,
};
