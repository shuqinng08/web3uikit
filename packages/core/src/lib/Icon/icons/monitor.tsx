import React from 'react';

const monitorIcon = (
    fill: string,
    size: number,
    style?: React.CSSProperties,
) => (
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
        <title>monitor icon</title>
        <path
            d="M5.8905 10.7906H9.78794C10.064 10.7906 10.2751 10.5877 10.2751 10.3223C10.2751 10.0569 10.064 9.854 9.78794 9.854H5.8905C5.61443 9.854 5.40332 10.0569 5.40332 10.3223C5.40332 10.5877 5.61443 10.7906 5.8905 10.7906Z"
            fill={fill}
        />
        <path
            d="M5.8905 12.5078H10.5999C10.876 12.5078 11.0871 12.3049 11.0871 12.0395C11.0871 11.7741 10.876 11.5712 10.5999 11.5712H5.8905C5.61443 11.5712 5.40332 11.7741 5.40332 12.0395C5.40332 12.3049 5.61443 12.5078 5.8905 12.5078Z"
            fill={fill}
        />
        <path
            d="M17.7457 13.2883H15.9593C15.6833 13.2883 15.4722 13.4913 15.4722 13.7567C15.4722 14.022 15.6833 14.225 15.9593 14.225H17.7457C18.0217 14.225 18.2329 14.022 18.2329 13.7567C18.2329 13.4913 18.0055 13.2883 17.7457 13.2883Z"
            fill={fill}
        />
        <path
            d="M14.4973 13.2883H5.8905C5.61443 13.2883 5.40332 13.4913 5.40332 13.7567C5.40332 14.022 5.61443 14.225 5.8905 14.225H14.4973C14.7734 14.225 14.9845 14.022 14.9845 13.7567C14.9845 13.4913 14.7572 13.2883 14.4973 13.2883Z"
            fill={fill}
        />
        <path
            d="M21.0094 4H12.7598C12.2077 4 11.7692 4.42149 11.7692 4.95225V5.40496H3.79573C3.35726 5.40496 3 5.74839 3 6.16988V15.3958V15.5675V17.0817C3 17.3471 3.24359 17.5813 3.51966 17.5813H10.2103V18.0964C10.2103 18.5491 10.0966 18.9862 9.88547 19.3765C9.86923 19.3921 9.86923 19.4233 9.86923 19.4389H8.68376C8.55385 19.4389 8.44017 19.5482 8.44017 19.6731V20.7658C8.44017 20.8907 8.55385 21 8.68376 21H15.1795C15.3094 21 15.4231 20.8907 15.4231 20.7658V19.6731C15.4231 19.5482 15.3094 19.4389 15.1795 19.4389H13.8154C13.8154 19.4233 13.7991 19.3921 13.7991 19.3765C13.588 18.9862 13.4744 18.5335 13.4744 18.0964V17.5813H20.0188C20.3111 17.5813 20.5385 17.3471 20.5385 17.0817V15.5675V15.3958V10.5565H21.0094C21.5615 10.5565 22 10.135 22 9.60422V4.95225C22 4.42149 21.5615 4 21.0094 4ZM4.46154 14.9275V6.80992H11.7692V9.60422C11.7692 10.1038 12.1752 10.5253 12.6949 10.5565L12.5812 12.1331C12.5812 12.2268 12.6299 12.3205 12.7274 12.3673C12.7598 12.3829 12.7923 12.3829 12.8248 12.3829C12.8897 12.3829 12.9547 12.3673 13.0034 12.3205L14.8547 10.5565H19.0769V14.9275H4.46154ZM13.4581 6.57576C13.4581 6.35721 13.6368 6.18549 13.8641 6.18549H17.7615C17.9889 6.18549 18.1675 6.35721 18.1675 6.57576C18.1675 6.79431 17.9889 6.96602 17.7615 6.96602H13.8641C13.6368 6.96602 13.4581 6.79431 13.4581 6.57576ZM18.9795 8.29293C18.9795 8.51148 18.8009 8.6832 18.5735 8.6832H13.8641C13.6368 8.6832 13.4581 8.51148 13.4581 8.29293C13.4581 8.07438 13.6368 7.90266 13.8641 7.90266H18.5735C18.8009 7.90266 18.9795 8.07438 18.9795 8.29293Z"
            fill={fill}
        />
    </svg>
);
export default monitorIcon;
