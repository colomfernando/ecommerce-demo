import React from 'react';

const IconFilter = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800"
      height="800"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <g>
        <g stroke="#000" strokeWidth="1.5">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M2 17.5h5"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M22 6.5h-5"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M13 17.5h9"
          ></path>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M11 6.5H2"
          ></path>
          <path d="M7 15.5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H8a1 1 0 01-1-1v-4z"></path>
          <path d="M17 4.5a1 1 0 00-1-1h-4a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4z"></path>
        </g>
      </g>
    </svg>
  );
};

export default IconFilter;
