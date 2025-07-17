import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import UserSVG from '../assets/aa 1 1.svg'

const images = [
    { id: "0", url: UserSVG, text: "Moyne Matt", count: '20K Use' },
    { id: "3", url: UserSVG, text: "Jessica Kumari", count: '30K Use' },
];

export default function RotatingCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<"next" | "prev">("next");
    const [isRotating, setIsRotating] = useState(false);

    const handleClick = (type: "next" | "prev") => {
        if (isRotating) return;
        setIsRotating(true);
        setDirection(type);
        setTimeout(() => {
            setIndex((prev) =>
                type === "next"
                    ? (prev + 1) % images.length
                    : (prev - 1 + images.length) % images.length
            );
            setIsRotating(false);
        }, 100);
    };

    const variants = {
        enter: (dir: "next" | "prev") => ({
            rotateZ: dir === "next" ? 180 : -180,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            rotateZ: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (dir: "next" | "prev") => ({
            rotateZ: dir === "next" ? -180 : 180,
            opacity: 0,
            scale: 0.8,
            transition: { duration: 0.8 },
        }),
    };


    return (
        <div className="position-relative flex-center" style={{ height: "calc(100vh - 62px)" }}>
            <div className='custom-bg-image position-absolute blur-effect'></div>
            <div className="slider-container">
                <AnimatePresence custom={direction} mode="sync">
                    <motion.div
                        key={index}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 1, ease: "easeInOut" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            borderRadius: "16px",
                            backfaceVisibility: "hidden",
                            transformStyle: "preserve-3d",
                            background: "radial-gradient(circle, #9A72FD 0%, #B497FE 26%, #FFFFFF 100%)",

                        }}
                    >
                        <div className="flex-space-col-between gradient-border">
                            <p className="text-gradient-orange fs-62 hover-lift">{images[index].count}</p>
                            <div className="flex-center-col">
                                <img
                                    src={images[index].url}
                                    alt=""
                                    className="img-carousel hover-lift mt-4" />
                                <p className="fs-42 font-weight-bold hover-lift">{images[index].text}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>



            </div>
            <button
                onClick={() => handleClick("prev")}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "12%",
                    transform: "translateY(-50%)",
                    fontSize: "2rem",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                <span className="custom-arrow-icon">
                    <svg width="20" height="46" viewBox="0 0 20 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.25 1.41675L0.75 23.0001L19.25 44.5834" stroke="#976FFF" stroke-opacity="0.3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
            </button>

            <button
                onClick={() => handleClick("next")}
                style={{
                    position: "absolute",
                    top: "50%",
                    right: "12%",
                    transform: "translateY(-50%)",
                    fontSize: "2rem",
                    background: "transparent",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                }}
            >
                <span className="custom-arrow-icon">
                    <svg width="20" height="46" viewBox="0 0 20 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.75 1.41675L19.25 23.0001L0.75 44.5834" stroke="#976FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></span>
            </button>
        </div>
    );
}
