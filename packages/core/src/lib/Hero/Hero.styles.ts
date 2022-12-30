import { breakpoints, color, resetCSS } from '@web3uikit/styles';
import styled, { css } from 'styled-components';
import { IHeroProps, TAlignValues } from './types';

// styles
type TStyleProps = Pick<
    IHeroProps,
    | 'align'
    | 'backgroundColor'
    | 'backgroundURL'
    | 'customize'
    | 'height'
    | 'linearGradient'
    | 'rounded'
    | 'padding'
    | 'textColor'
>;

const setImageAlign = (align: TAlignValues) => {
    switch (align) {
        case 'center':
            return css`
                margin: auto;
            `;
        case 'left':
            return css`
                margin-right: auto;
            `;
        case 'right':
            return css`
                margin-left: auto;
            `;
    }
};

const SectionStyled = styled.section<TStyleProps>`
    ${resetCSS};
    background-color: ${(p) =>
        p.backgroundColor ?? p.customize?.backgroundColor ?? color.gray30};
    background-image: ${({ backgroundURL, linearGradient = '' }) =>
        backgroundURL
            ? `${linearGradient && linearGradient + ', '} url(${backgroundURL})`
            : linearGradient};
    background-repeat: no-repeat;
    background-size: contain;
    border: ${(p) => p.customize?.border ?? 'none'};
    border-radius: ${(p) => p.rounded ?? p.customize?.borderRadius ?? '20px'};
    color: ${(p) => p.textColor ?? p.customize?.color ?? color.white};
    display: flex;
    font-size: ${(p) => p.customize?.fontSize ?? '16px'};
    font-weight: ${(p) => p.customize?.fontWeight ?? '400'};
    height: ${({ height }) => height || '100%'};
    justify-content: space-between;
    margin: ${(p) => p.customize?.margin ?? '0px'};
    max-width: 100%;
    overflow: hidden;
    @media (max-width: ${breakpoints.sm}) {
        align-items: center;
        text-align: center;
        flex-direction: column;
        gap: 20px;
        height: fit-content;
    }
`;

const LeftContainerDiv = styled.div<TStyleProps>`
    display: flex;
    flex-grow: 1;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    padding: ${(p) => p.padding ?? p.customize?.padding ?? '20px'};
    @media (max-width: ${breakpoints.sm}) {
        padding: 20px;
        width: 100%;
        align-items: center;
    }
`;

const RightContainerDiv = styled.div`
    display: flex;
    flex-grow: 1;
    width: 50%;
    @media (max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`;

const ImageStyled = styled.img<TStyleProps>`
    block-size: auto;
    height: 100%;
    max-inline-size: 100%;
    object-fit: contain;
    ${(p) => setImageAlign(p.align || 'center')};
    @media (max-width: ${breakpoints.sm}) {
        margin: auto;
    }
`;

export default {
    ImageStyled,
    LeftContainerDiv,
    RightContainerDiv,
    SectionStyled,
};
