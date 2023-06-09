// Auto-generated file created by svgr-cli source svg-template.js
// Run pnpm icons:create to update
// Do not edit
import { SVGProps } from 'react';
import { SVGRProps } from '../type';
const SvgDiscord = ({
    title,
    titleId,
    isResponsive = false,
    style,
    ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="currentColor"
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
        <path d="M19.636 5.06a18.195 18.195 0 0 0-4.54-1.397c-.214.383-.408.778-.58 1.182a16.902 16.902 0 0 0-5.038 0 12.523 12.523 0 0 0-.581-1.182 18.323 18.323 0 0 0-4.542 1.4c-2.873 4.25-3.651 8.394-3.262 12.48a18.295 18.295 0 0 0 5.567 2.794c.45-.606.85-1.25 1.192-1.923-.651-.243-1.28-.543-1.878-.896.158-.114.312-.232.46-.346a13.076 13.076 0 0 0 11.13 0c.15.123.305.24.46.346-.599.354-1.228.654-1.88.898.342.673.74 1.316 1.192 1.92a18.213 18.213 0 0 0 5.57-2.792c.457-4.738-.78-8.844-3.27-12.485ZM8.345 15.03c-1.085 0-1.981-.985-1.981-2.196 0-1.211.865-2.204 1.977-2.204 1.113 0 2.003.993 1.984 2.204-.02 1.211-.874 2.196-1.98 2.196Zm7.309 0c-1.087 0-1.98-.985-1.98-2.196 0-1.211.866-2.204 1.98-2.204 1.114 0 1.997.993 1.978 2.204-.02 1.211-.872 2.196-1.978 2.196Z" />
    </svg>
);

export default SvgDiscord;
