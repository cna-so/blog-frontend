import React from "react";

const LoadingSpinner = () => {
  return (
    <div className={"w-full flex items-center justify-center"}>
      <div className="loader loader--style5" title="4">
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="80px"
          height="86px"
          viewBox="0 0 24 30"
          xmlSpace="preserve"
        >
          {/*"enable-background:new 0 0 50 50;"*/}
          <rect x="0" y="0" width="4" height="10" fill="#612bff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="10" y="0" width="4" height="10" fill="#612bff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.2s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="20" y="0" width="4" height="10" fill="#612bff">
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="translate"
              values="0 0; 0 20; 0 0"
              begin="0.4s"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
