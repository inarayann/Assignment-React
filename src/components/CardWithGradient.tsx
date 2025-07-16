import React from 'react';
import type { CardBlockProps } from '../constant/interface/Cards';

const CardWithGradient: React.FC<CardBlockProps> = ({
  description,
  largeCount,
  subText,
  className,
  textClass
}) => {
  return (
    <div className={`stat-card shadow-sm d-flex flex-column ${className}`} >
      {largeCount && (
        <h1 className={`display-4 fw-bold mb-0 fs-62 animate-pop-in ${textClass}`}>{largeCount}</h1>
      )}
      {subText && (
       <div className=''>
         <p className="text-muted-dark small mb-3 animate-pop-in">{subText}</p>
         </div>
      )}
     {description && (
      <p className="text-muted-dark mb-3 text-color-gradient animate-pop-in">{description}</p>
     )}
    </div>
  );
};

export default CardWithGradient;