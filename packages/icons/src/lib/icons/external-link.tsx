import { FC } from 'react';
import { TIconProps } from '../type';
const ExternalLinkIcon: FC<TIconProps> = ({
    fill = 'inherit',
    size = 18,
    style,
}) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
        style={style}
    >
        <title>external link icon</title>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.62025 7.32911C5.34832 7.32911 5.08753 7.43714 4.89524 7.62942C4.70296 7.82171 4.59494 8.0825 4.59494 8.35443V18.3797C4.59494 18.6517 4.70296 18.9125 4.89524 19.1048C5.08753 19.297 5.34832 19.4051 5.62025 19.4051H15.6456C15.9175 19.4051 16.1783 19.297 16.3706 19.1048C16.5629 18.9125 16.6709 18.6517 16.6709 18.3797V12.9114C16.6709 12.471 17.0279 12.1139 17.4684 12.1139C17.9088 12.1139 18.2658 12.471 18.2658 12.9114V18.3797C18.2658 19.0747 17.9898 19.7412 17.4984 20.2325C17.007 20.7239 16.3405 21 15.6456 21H5.62025C4.92532 21 4.25885 20.7239 3.76745 20.2325C3.27606 19.7412 3 19.0747 3 18.3797V8.35443C3 7.6595 3.27606 6.99302 3.76745 6.50163C4.25885 6.01024 4.92532 5.73418 5.62025 5.73418H11.0886C11.529 5.73418 11.8861 6.09122 11.8861 6.53165C11.8861 6.97208 11.529 7.32911 11.0886 7.32911H5.62025Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9367 3.79747C13.9367 3.35704 14.2937 3 14.7342 3H20.2025C20.643 3 21 3.35704 21 3.79747V9.26582C21 9.70625 20.643 10.0633 20.2025 10.0633C19.7621 10.0633 19.4051 9.70625 19.4051 9.26582V4.59494H14.7342C14.2937 4.59494 13.9367 4.2379 13.9367 3.79747Z"
            fill={fill}
        />
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.7664 3.23357C21.0779 3.545 21.0779 4.04993 20.7664 4.36136L10.7411 14.3867C10.4297 14.6981 9.92475 14.6981 9.61332 14.3867C9.30189 14.0752 9.30189 13.5703 9.61332 13.2589L19.6386 3.23357C19.9501 2.92214 20.455 2.92214 20.7664 3.23357Z"
            fill={fill}
        />
    </svg>
);
export default ExternalLinkIcon;
