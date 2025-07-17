import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CarouselItemProps {
    index: number;
    isActive: boolean;
    title: string;
    description: string;
    icon?: string;
    iconClass?: string
}

const CarouselItem: React.FC<CarouselItemProps> = ({ index, isActive, title, description, icon, iconClass }) => {
    return (
        <div className={`carousel-card ${isActive ? 'active-card' : ''}`}>
            <div className='custom-container'></div>
            <div className="card-content">
                <h3 className='fs-50'>{title}</h3>
                <span className='custom-svg'>
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
                <i className={`bi fs-4 custom-i ${icon} ${iconClass}`}></i>
                <p>{description}</p>
            </div>
        </div>
    );
};

const CardSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow: <CustomPrevArrow />, // <--- Add your custom previous arrow component
    nextArrow: <CustomNextArrow />,
        centerPadding: '25%',
        focusOnSelect: true,
        beforeChange: (oldIndex: number, newIndex: number) => {
        },
        afterChange: (currentIndex: number) => {
        },
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };

    const cardsData = [
        { title: 'Your AI Prompt Companion', description: 'Use pre-made templates to jumpstart creativity.', icon: 'bi-magic', iconClass: 'icon-bg-gift' },
        { title: 'Your AI Prompt Prompts templates', description: 'Use pre-made templates to jumpstart creativity.', icon: 'bi-app-indicator', iconClass: 'icon-bg-camera' },
        { title: 'Your AI Prompt Companion', description: 'Use pre-made templates to jumpstart creativity.', icon: 'bi-share', iconClass: 'icon-bg-gift' },
    ];

    const [activeSlide, setActiveSlide] = React.useState(0);

    return (
        <div className="carousel-container">
            <Slider
                {...settings}
                beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}
            >
                {cardsData.map((card, index) => (
                    <CarouselItem
                        key={index}
                        index={index}
                        isActive={index === activeSlide}
                        title={card.title}
                        icon={card.icon}
                        iconClass={card.iconClass}
                        description={card.description}
                    />
                ))}
            </Slider>
        </div>
    );
};

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`custom-arrow custom-prev ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="custom-arrow-icon">
        <svg width="20" height="46" viewBox="0 0 20 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.25 1.41675L0.75 23.0001L19.25 44.5834" stroke="#976FFF" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </span>
    </div>
  );
};

const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`custom-arrow custom-next ${className}`}
      style={{ ...style }}
      onClick={onClick}
    >
      <span className="custom-arrow-icon">
        <svg width="20" height="46" viewBox="0 0 20 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.75 1.41675L19.25 23.0001L0.75 44.5834" stroke="#976FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </span>
    </div>
  );
};

export default CardSlider;