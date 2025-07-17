import { motion, AnimatePresence } from "framer-motion";
import { useState } from 'react';

const steps = [
  {
    title: 'GrowthIO',
    subtitle: 'October 2021 - Present',
    location: 'Remote',
    className: 'left-align fadeInUp animate-pop-in',
    iconClass: 'bi-app-indicator'
  },
  {
    title: 'Your AI Prompt Companion',
    subtitle: 'Explore multiple prompt directions with branching.',
    location: 'Start from 2023',
    className: 'right-align fadeInUp animate-pop-in',
    iconClass: 'bi-arrows-fullscreen'
  },
  {
    title: 'GrowthIO',
    subtitle: 'October 2022 - Present',
    location: 'Remote',
    className: 'left-align fadeInUp animate-pop-in',
    iconClass: 'bi-border-style'
  },
];

const textVariants = {
  initial: { opacity: 0, x: 0 },
  animate: { opacity: 1, x: 10 },
  exit: { opacity: 0, x: 30 },
  transition: { duration: 2, ease: "easeIn" }
};

const AnimatedText = ({ children, id, className = '' }: { children: React.ReactNode, id: string, className?: string }) => (
  <AnimatePresence mode="wait">
    <motion.p
      key={id}
      className={`${className}`}
      initial={textVariants.initial}
      animate={textVariants.animate}
      exit={textVariants.exit}
      transition={{ duration: 0.9, ease: "backInOut" }}
    >
      {children}
    </motion.p>
  </AnimatePresence>
);

function Stepper() {
  const [activeIndex, setActiveIndex] = useState(1);

  const getDotPosition = () => {
    switch (activeIndex) {
      case 0: return '27%';
      case 1: return '50%';
      case 2: return '73%';
      default: return '50%';
    }
  };

  return (
    <div className="stepper parent-stepper-wrapper text-white position-relative overflow-hidden" style={{ height: "calc(100vh - 62px)" }}>
      <div className='custom-bg-image position-absolute'></div>
      <div className="position-absolute timeline-line"></div>

      <span
        className="timeline-dot position-absolute"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: getDotPosition(),
        }}
      />

      {steps.map((step, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`timeline-card card px-4 py-3 border-0 transition-all rounded-4 shadow-lg position-relative ${index === activeIndex ? 'active-card' : 'inactive-card'} ${step.className}`}
        >
          <div className="card-body card-stepper-container">
            <AnimatedText id={`title-${index}`} className="card-title fw-bold mb-2">{step.title}</AnimatedText>
            <AnimatedText id={`subtitle-${index}`} className="card-text small mb-1">{step.subtitle}</AnimatedText>
            <div className="card-stepper-body my-3 mb-2">
              <AnimatedText id={`location-${index}`} className="card-text small text-muted ">{step.location}</AnimatedText>
              {index === activeIndex && (
                <div>

                  <span className='custom-stepper-svg hover-lift-no-box'>
                          <i className={`bi fs-4 icon-bg-camera ${step.iconClass}`}></i>
                    <svg width="130" height="66" viewBox="0 0 130 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_di_2186_3282)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M97 64C114.673 64 129 49.6731 129 32C129 14.3269 114.673 0 97 0C80.9801 0 67.7096 11.7719 65.3671 27.1372C65.0414 29.2739 63.2976 31 61.1362 31H4C2.34315 31 1 32.3431 1 34C1 35.6569 2.34315 37 4 37H61.967C63.9368 37 65.5869 38.4443 66.0993 40.3462C69.7706 53.972 82.2142 64 97 64Z" fill="#110A2B" fill-opacity="0.25" shape-rendering="crispEdges" />
                        </g>
                        <defs>
                            <filter id="filter0_di_2186_3282" x="0" y="0" width="130" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="0.5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.07 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2186_3282" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2186_3282" result="shape" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1.5" />
                                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.00547059 0 0 0 0 0.0187459 0 0 0 0 0.116098 0 0 0 0.5 0" />
                                <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2186_3282" />
                            </filter>
                        </defs>
                    </svg>

                </span>
          
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Stepper;
