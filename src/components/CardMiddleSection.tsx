import React from 'react';
import type { CardBlockProps } from '../constant/interface/Cards';

const CardMiddleSection: React.FC<CardBlockProps> = ({
    description,
    subText,
    className,
    textClass,
    svg,
    mainSVG
}) => {
    return (
        <div className={`stat-card shadow-sm d-flex flex-column position-relative ${className ?? ''}`} >
            <div className={`main-svg  ${subText?.includes('Journey') ? 'right' : 'left'}`}>
                {<>{mainSVG}</>}
            </div>

            <div className={`hover-lift ${textClass}`}>
                <>{svg}</>
            </div>
            {subText && (
                <p className="text-muted-dark fs-18 mb-3 animate-pop-in">{subText}</p>
            )}
            {description && (<p className="text-muted-dark fs-16 mb-3 text-color-gradient animate-pop-in">{description}</p>
            )}
        </div>
    );
};

export default CardMiddleSection;