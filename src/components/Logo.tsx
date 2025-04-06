
import React from 'react';

interface LogoProps {
  firstText: string;
  secondText: string;
  firstColor: string;
  secondColor: string;
  fontSize: number;
  triangleColor: string;
  fontFamily: string;
  triangleSize: number;
  showTriangle?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  firstText,
  secondText,
  firstColor,
  secondColor,
  fontSize,
  triangleColor,
  fontFamily,
  triangleSize,
  showTriangle = true,
}) => {
  return (
    <div className="relative inline-flex items-center">
      <span
        style={{
          color: firstColor,
          fontFamily,
          fontSize: `${fontSize}px`,
          fontWeight: 'bold',
        }}
      >
        {firstText}
      </span>
      <span
        style={{
          color: secondColor,
          fontFamily,
          fontSize: `${fontSize}px`,
          fontWeight: 'normal',
        }}
      >
        {secondText}
      </span>
      {showTriangle && (
        <div
          className="absolute"
          style={{
            right: `-${triangleSize * 0.4}px`,
            top: '0',
            width: `${triangleSize}px`,
            height: `${triangleSize * 0.5}px`,
            overflow: 'hidden',
            transform: 'translateY(-10%)',
          }}
        >
          <div
            style={{
              width: '0',
              height: '0',
              borderStyle: 'solid',
              borderWidth: `0 0 ${triangleSize * 0.5}px ${triangleSize}px`,
              borderColor: `transparent transparent transparent ${triangleColor}`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Logo;
