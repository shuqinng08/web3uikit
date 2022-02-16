import { css } from 'styled-components';
import color from '../../styles/colors';
import type { TypographyProps, variantType, weightType } from './types';
import './fonts/fonts.css';

const openSans = css`
    @import url('//fonts.googleapis.com/css?family=Open+Sans');
    font-family: 'Open Sans', sans-serif;
`;

export const getCSSWeight = (weight: weightType) => {
    switch (weight) {
        case 'regular':
        case '400':
            return css`
                font-weight: 400;
            `;
        case 'medium':
        case '500':
            return css`
                font-weight: 500;
            `;
        case 'semibold':
        case '600':
            return css`
                font-weight: 600;
            `;
        case 'bold':
        case '700':
            return css`
                font-weight: 700;
            `;
        default:
            throw new Error('Not correct font weight');
    }
};

const text = css`
    ${openSans};
    -webkit-font-smoothing: antialiased;
    color: ${color.grey};
    fill: ${color.grey};
    font-style: normal;
    letter-spacing: 0;
`;

const heading = css`
    -webkit-font-smoothing: antialiased;
    font-family: 'Argentum Sans';
    color: ${color.blueDark};
    fill: ${color.blueDark};
    font-style: normal;
    letter-spacing: 0;
`;

const h1 = css`
    ${heading};
    font-weight: 600;
    font-size: 36px;
    line-height: 40;
    letter-spacing: -0.75px;
`;

const h2 = css`
    ${heading};
    font-size: 32px;
    font-weight: 400;
    line-height: 36px;
`;

const h3 = css`
    ${heading};
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
`;

const h4 = css`
    ${heading};
    font-size: 20;
    font-weight: 400;
    line-height: 28px;
`;

const subtitle1 = css`
    ${heading};
    font-weight: 600;
    color: ${color.blueDark};
    fill: ${color.blueDark};
    font-size: 18px;
    line-height: 24px;
`;

const subtitle2 = css`
    ${heading};
    font-weight: 600;
    color: ${color.blueDark};
    fill: ${color.blueDark};
    font-size: 16px;
    line-height: 24px;
`;

const caption14 = css`
    ${text};
    font-size: 14px;
    line-height: 24px;
`;

const caption12 = css`
    ${text};
    font-size: 12px;
    line-height: 24px;
`;

const body18 = css`
    ${text};
    font-size: 18px;
    line-height: 24px;
`;

const body16 = css`
    ${text};
    font-size: 16px;
    line-height: 24px;
`;

const italicFont = css`
    font-style: italic;
`;

const ibm = css`
    @import url('//fonts.googleapis.com/css?family=IBM+Plex+Mono');
    font-family: 'IBM Plex Mono', monospace;
`;

export const getFontStyle = (variant: variantType) => {
    switch (variant) {
        case 'h1':
            return h1;
        case 'h2':
            return h2;
        case 'h3':
            return h3;
        case 'h4':
            return h4;
        case 'subtitle1':
            return subtitle1;
        case 'subtitle2':
            return subtitle2;
        case 'body18':
            return body18;
        case 'body16':
            return body16;
        case 'caption14':
            return caption14;
        case 'caption12':
            return caption12;
        default:
            return body16;
    }
};

export const getTypographyStyle = (p: TypographyProps) => css`
    ${getFontStyle(p.variant || 'body16')};
    ${p?.monospace && ibm};
    ${p?.color && `color: ${p.color}`};
    ${p?.italic && italicFont};
    ${p?.weight && getCSSWeight(p.weight)};
`;
