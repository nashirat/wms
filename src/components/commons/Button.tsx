"use client";

import React from "react";
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ButtonProps {
  text: string;
  icon?: FontAwesomeIconProps["icon"];
  iconSize?: "sm" | "lg" | "xl" | "2xl" | "4xl";
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  height?: string;
  onClick?: () => void;
  className?: string;
  textSize?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  icon,
  iconSize = "lg",
  bgColor = "#E87722",
  textColor = "#FFFFFF",
  borderColor = "#FFFFFF",
  height = "48px",
  onClick,
  className = "",
  textSize,
  href,
}) => {
  const baseClasses =
    "relative flex items-center justify-center gap-2 uppercase tracking-wide shadow-md transition duration-300 hover:opacity-80";
  const buttonClasses = `${baseClasses} ${className}`;

  const buttonContent = (
    <>
      <button
        onClick={onClick}
        className={buttonClasses}
        style={{
          position: "relative",
          color: textColor,
          height,
          clipPath:
            "polygon(8% 0%, 92% 0%, 100% 14%, 100% 86%, 92% 100%, 8% 100%, 0% 86%, 0% 14%)",
        }}
      >
        <span
          className="absolute inset-0"
          style={{
            backgroundColor: borderColor,
            height,
          }}
        ></span>

        <span
          className="bg-white relative flex items-center justify-center gap-2 px-6 font-titillium"
          style={{
            backgroundColor: bgColor,
            clipPath:
              "polygon(9% 1%, 91.8% 1%, 99% 14%, 99% 86%, 91.8% 99%, 9% 99%, 1% 86%, 1% 14%)",
            height: `calc(${height} - 0.5px)`,
          }}
        >
          {icon && (
            <FontAwesomeIcon
              icon={icon}
              className={`text-${iconSize} text-white`}
            />
          )}
          {text ? (
            <span className={`text-${textSize} text-white`}>{text}</span>
          ) : null}
        </span>
      </button>
    </>
  );

  return href ? (
    <Link href={href} >
      {buttonContent}
    </Link>
  ) : (
    <button onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default Button;
