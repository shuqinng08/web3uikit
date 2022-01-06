import React from 'react';

const userIcon = (fill: string, size: number) => (
    <svg
        aria-hidden="true"
        data-testid="test-icon"
        fill="none"
        height={size}
        viewBox="0 0 24 24"
        width={size}
        xmlns="http://www.w3.org/2000/svg"
    >
        <title>user icon</title>
        <path
            d="M15.5759 13.875C14.4107 13.875 13.8884 14.5 12 14.5C10.0714 14.5 9.54911 13.875 8.38393 13.875C5.41071 13.875 3 16.2578 3 19.1484V20.125C3 21.1797 3.84375 22 4.92857 22H19.0714C20.1161 22 21 21.1797 21 20.125V19.1484C21 16.2578 18.5491 13.875 15.5759 13.875ZM19.0714 20.125H4.92857V19.1484C4.92857 17.2734 6.45536 15.75 8.38393 15.75C8.98661 15.75 9.91071 16.375 12 16.375C14.0491 16.375 14.9732 15.75 15.5759 15.75C17.5045 15.75 19.0714 17.2734 19.0714 19.1484V20.125ZM12 13.25C15.1741 13.25 17.7857 10.75 17.7857 7.625C17.7857 4.53906 15.1741 2 12 2C8.78571 2 6.21429 4.53906 6.21429 7.625C6.21429 10.75 8.78571 13.25 12 13.25ZM12 3.875C14.0893 3.875 15.8571 5.59375 15.8571 7.625C15.8571 9.69531 14.0893 11.375 12 11.375C9.87054 11.375 8.14286 9.69531 8.14286 7.625C8.14286 5.59375 9.87054 3.875 12 3.875Z"
            fill={fill}
        />
    </svg>
);
export default userIcon;
