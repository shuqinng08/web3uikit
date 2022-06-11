import { FC } from 'react';
import { TIconProps } from '../type';
const StarsIcon: FC<TIconProps> = ({
    fill = 'currentColor',
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
        <title>stars icon</title>
        <path
            d="M7.81001 2.57768C7.87031 2.39433 8.12969 2.39433 8.18999 2.57768L9.45337 6.41913C9.47321 6.47946 9.52054 6.52679 9.58087 6.54663L13.4223 7.81001C13.6057 7.87031 13.6057 8.12969 13.4223 8.18999L9.58087 9.45337C9.52054 9.47321 9.47321 9.52054 9.45337 9.58087L8.18999 13.4223C8.12969 13.6057 7.87031 13.6057 7.81001 13.4223L6.54663 9.58087C6.52679 9.52054 6.47946 9.47321 6.41913 9.45337L2.57768 8.18999C2.39433 8.12969 2.39433 7.87031 2.57768 7.81001L6.41913 6.54663C6.47946 6.52679 6.52679 6.47946 6.54663 6.41913L7.81001 2.57768Z"
            fill={fill}
        />
        <path
            d="M5.15305 17.4215C5.06604 17.2492 5.24944 17.0658 5.42173 17.1528L6.91007 17.9044C6.96676 17.9331 7.03369 17.9331 7.09039 17.9044L8.57872 17.1528C8.75101 17.0658 8.93442 17.2492 8.84741 17.4215L8.09576 18.9098C8.06713 18.9665 8.06713 19.0334 8.09576 19.0901L8.84741 20.5785C8.93442 20.7508 8.75101 20.9342 8.57872 20.8472L7.09039 20.0955C7.03369 20.0669 6.96676 20.0669 6.91007 20.0955L5.42173 20.8472C5.24944 20.9342 5.06604 20.7508 5.15305 20.5785L5.90469 19.0901C5.93333 19.0334 5.93333 18.9665 5.90469 18.9098L5.15305 17.4215Z"
            fill={fill}
        />
        <path
            d="M19.9926 11.8097C20.1649 11.7227 20.3483 11.9061 20.2613 12.0783L18.7954 14.9809C18.7668 15.0376 18.7668 15.1045 18.7954 15.1612L20.2613 18.0638C20.3483 18.2361 20.1649 18.4195 19.9926 18.3324L17.09 16.8666C17.0334 16.838 16.9664 16.838 16.9097 16.8666L14.0072 18.3324C13.8349 18.4195 13.6515 18.2361 13.7385 18.0638L15.2044 15.1612C15.233 15.1045 15.233 15.0376 15.2044 14.9809L13.7385 12.0783C13.6515 11.9061 13.8349 11.7227 14.0072 11.8097L16.9097 13.2755C16.9664 13.3042 17.0334 13.3042 17.09 13.2755L19.9926 11.8097Z"
            fill={fill}
        />
    </svg>
);
export default StarsIcon;
