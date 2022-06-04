import { FC } from 'react';
import styled from 'styled-components';
import { color, resetButtonCSS } from '@web3uikit/styles';
import { Icon } from '@web3uikit/icons';
import { IHideButtonProps } from './types';

const HideButtonStyled = styled.button`
    ${resetButtonCSS};
    cursor: pointer;
`;

const HideButton: FC<IHideButtonProps> = ({
    iconColor = color.blue,
    iconSize = 24,
    isHidden = false,
    onToggle,
    ...props
}) => {
    return (
        <HideButtonStyled
            onClick={onToggle}
            data-testid="test-hidebutton"
            {...props}
        >
            {isHidden ? (
                <Icon svg="eyeClosed" size={iconSize} fill={`${iconColor}`} />
            ) : (
                <Icon svg="eye" size={iconSize} fill={`${iconColor}`} />
            )}
        </HideButtonStyled>
    );
};

export default HideButton;
