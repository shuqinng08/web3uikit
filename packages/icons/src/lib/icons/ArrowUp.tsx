// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgArrowUp = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        data-testid="test-icon"
        aria-hidden="true"
        style={
            isResponsive
                ? style
                : {
                      flex: 'none',
                      ...style,
                  }
        }
        aria-labelledby={titleId}
        {...props}
    >
        {title ? <title id={titleId}>{title}</title> : null}
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.293 4.793a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 7.914V19.5a1 1 0 1 1-2 0V7.914l-5.293 5.293a1 1 0 0 1-1.414-1.414l7-7Z"
            fill="#000"
        />
    </svg>
);

export default SvgArrowUp;
