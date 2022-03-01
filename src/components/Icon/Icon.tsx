/* eslint-disable linebreak-style */
import React from 'react';
import collection, { TIconType } from './collection';
import { StyledSpan } from './Icon.styles';
import type { IconProps } from './types';

const Icon: React.FC<IconProps> = ({
    fill = 'inherit',
    onClick = () => {},
    size = 18,
    svg,
    style,
}) => {
    const getIcon = (
        fill: string,
        size: number,
        svg: TIconType,
        style?: React.CSSProperties,
    ) => {
        const key = (svg + 'Icon') as keyof typeof collection;
        if (!collection[key]) throw new Error(`no icon found: '${key}'`);
        return collection[key](fill, size, style);
    };

    return (
        <StyledSpan onClick={onClick}>
            {getIcon(fill, size, svg, style)}
        </StyledSpan>
    );
};

export default Icon;
