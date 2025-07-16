import React from "react";
import type { CardBlockProps } from "../constant/interface/Cards";

const CardBlock: React.FC<CardBlockProps> = ({
  title,
  description,
  iconClass,
  buttonText,
  onButtonClick,
  isButtonPurple = false,
  isOutputFormats = false,
  outputFormats = [],
  activeFormat,
  onFormatChange,
  largeCount,
  subText,
  avatarImages = [],
  customContent,
  className,
  textClass,
}) => {
  return (
    <div
      className={`stat-card shadow-sm d-flex flex-column ${className ?? ""}`}
    >
      {largeCount && (
        <h1
          className={`display-4 fw-bold mb-0 animate-pop-in hover-lift ${
            textClass ?? ""
          }`}
        >
          {largeCount}
        </h1>
      )}
      {subText && (
        <p className="text-muted-dark fs-18 mb-3 text-color-gradient animate-pop-in">
          {subText}
        </p>
      )}
      {avatarImages.length > 0 && (
        <div className="d-flex mb-3">
          {avatarImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`User ${index + 1}`}
              className="rounded-circle border border-2 border-white hover-lift"
              style={{
                width: "45px",
                height: "45px",
                marginLeft: index > 0 ? "-10px" : "0",
              }}
            />
          ))}
        </div>
      )}
      {description && (
        <p className="text-muted-dark mb-3 text-color-gradient">
          {description}
        </p>
      )}

      {buttonText && (
        <button
          className={`btn btn-sm hover-lift ${
            isButtonPurple ? "btn-purple" : "btn-primary"
          } ${iconClass ? "btn-icon-text" : ""}`}
          onClick={onButtonClick}
        >
          {iconClass && <i className={`${iconClass} hover-lift fs-5`}></i>}
          {buttonText}
        </button>
      )}

      {isOutputFormats && (
        <div className="output-format-group">
          {outputFormats.map((format) => (
            <button
              key={format.value}
              className={`btn btn-sm ${
                activeFormat === format.value ? "active" : ""
              }`}
              onClick={() => onFormatChange && onFormatChange(format.value)}
            >
              {format.label}
            </button>
          ))}
        </div>
      )}

      {customContent && <div className="">{customContent}</div>}
    </div>
  );
};

export default CardBlock;
