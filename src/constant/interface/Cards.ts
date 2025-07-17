import type { ReactElement, ReactNode } from "react";
export interface CardBlockProps {
  title: string;
  description?: string;
  iconClass?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'primary' | 'secondary' | 'dark' | 'light';
  isButtonPurple?: boolean;
  isOutputFormats?: boolean;
  outputFormats?: { label: string; value: string }[];
  activeFormat?: string;
  onFormatChange?: (format: string) => void;
  largeCount?: string;
  subText?: string;
  avatarImages?: string[];
  customContent?: ReactNode;
  className?: string;
  textClass?: string;
  svg?: HTMLElement | ReactElement;
  mainSVG?: HTMLElement | ReactElement;
}
