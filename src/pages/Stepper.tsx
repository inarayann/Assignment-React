import { useState } from 'react';

const steps = [
  {
    title: 'GrowthIO',
    subtitle: 'October 2021 - Present             ',
    location: 'Remote',
    className:'left-align fadeInUp animate-pop-in',
    iconClass:'bi-app-indicator'

  },
  {
    title: 'Your AI Prompt Companion',
    subtitle: 'Explore multiple prompt directions with branching.',
    location: 'Start from 2023',
    active: true,
    className:'right-align fadeInUp animate-pop-in',
    iconClass:'bi-arrows-fullscreen'
  },
  {
    title: 'GrowthIO',
    subtitle: 'October 2022 - Present          ',
    location: 'Remote',
    className:'left-align fadeInUp animate-pop-in',
    iconClass:'bi-border-style'
  },
];

function Stepper() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="stepper parent-stepper-wrapper text-white position-relative overflow-hidden" style={{height:"calc(100vh - 62px)"}}>

      <div className='custom-bg-image position-absolute'></div>
      <div className="position-absolute timeline-line"></div>
     <span
      className="timeline-dot position-absolute"
      style={{
        left: '50%',
        transform: 'translateX(-50%)',
        top: activeIndex === 0 ? '27%' : activeIndex === 1 ? '50%' : '73%',
      }}
    ></span>
      {steps.map((step, index) => (
        <div
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`timeline-card card px-4 py-3 border-0 transition-all rounded-4 shadow-lg ${
            index === activeIndex ? 'active-card' : 'inactive-card'
          } ${step.className}`}
        >

          <div className="card-body">
            <h5 className="card-title fw-bold mb-2"><span className='hover-lift'>{step.title}</span> </h5>
            <p className="card-text small mb-1">{step.subtitle}</p>
            <div className='d-flex flex-row justify-content-between align-items-center my-2'>
            <p className="card-text small text-muted ">{step.location}</p>
            {index === activeIndex && (
              <div className="">
                <i className={`bi fs-4 icon-bg-camera hover-lift ${step.iconClass}`}></i>
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
