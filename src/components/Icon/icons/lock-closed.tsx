import React from "react";

const lockClosedIcon = (
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
    <title>lock closed icon</title>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.14768 9.625H4.88574C3.85021 9.625 3.01074 10.4645 3.01074 11.5V19.1245C3.01074 20.16 3.85021 20.9995 4.88574 20.9995H19.1315C20.167 20.9995 21.0065 20.16 21.0065 19.1245V11.5C21.0065 10.4645 20.167 9.625 19.1315 9.625H17.8518C17.7225 7.23291 17.0511 5.60461 15.9844 4.5618C14.793 3.39713 13.2733 3.125 11.9998 3.125C10.7262 3.125 9.20657 3.39713 8.01517 4.5618C6.94843 5.60461 6.27706 7.23291 6.14768 9.625ZM7.9004 9.625H16.0991C15.9733 7.56658 15.4015 6.43932 14.761 5.8132C14.0344 5.10287 13.054 4.875 11.9998 4.875C10.9455 4.875 9.96512 5.10287 9.23849 5.8132C8.598 6.43932 8.02618 7.56658 7.9004 9.625ZM4.88574 11.375C4.81671 11.375 4.76074 11.431 4.76074 11.5V19.1245C4.76074 19.1935 4.81671 19.2495 4.88574 19.2495H19.1315C19.2005 19.2495 19.2565 19.1935 19.2565 19.1245V11.5C19.2565 11.431 19.2005 11.375 19.1315 11.375H4.88574ZM11.9998 13.625C12.483 13.625 12.8748 14.0168 12.8748 14.5V16.5C12.8748 16.9832 12.483 17.375 11.9998 17.375C11.5165 17.375 11.1248 16.9832 11.1248 16.5V14.5C11.1248 14.0168 11.5165 13.625 11.9998 13.625Z"
      fill={fill}
    />
  </svg>
);
export default lockClosedIcon;
