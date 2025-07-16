import React from 'react';
import type { CardBlockProps } from '../constant/interface/Cards';

const CardWithDynamicImages: React.FC<CardBlockProps> = ({
  
  description,
  subText,
  className,
  customContent
}) => {
  return (
    <div className={`stat-card shadow-sm d-flex flex-column position-relative  ${className}`} >
      <p className="text-muted-dark fs-18 mb-3 animate-pop-in">{subText}</p>

     {description && (
      <p className="text-muted-dark mb-3 fs-16 text-color-gradient ">{description}</p>
     )}
     <div className='dynamic-items'>
        {customContent}
     </div>
    </div>
  );
};

export default CardWithDynamicImages;