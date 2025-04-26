import styled from "@emotion/styled";
import { ButtonType } from "../types";
import { keyframes } from "@emotion/react";

export const Button = ({
  children,
  color,
  backgroundColor,
  hoverBackgroundColor,
  onClick,
  width,
  height,
}: ButtonType) => {
  return (
    <ButtonContainer
      color={color}
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      width={width}
      height={height}
      onClick={onClick}
    >
      <ButtonContent>
        {children}
        <ButtonOverlay />
      </ButtonContent>
    </ButtonContainer>
  );
};

const shimmerAnimation = keyframes`
  0% {
    transform: skewX(-15deg) translateX(-100%);
  }
  100% {
    transform: skewX(-15deg) translateX(200%);
  }
`;

const rippleAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const ButtonContainer = styled.button<ButtonType>`
  position: relative;
  overflow: hidden;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  color: ${(props) => props.color || "#ffffff"};
  background-color: ${(props) => props.backgroundColor || "#4a4a4a"};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    background-color: ${(props) => props.hoverBackgroundColor || "#5a5a5a"};
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonContent = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const ButtonOverlay = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  animation: ${shimmerAnimation} 2s infinite linear;
  transform: skewX(-15deg);
  z-index: 2;
  pointer-events: none;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.3),
      transparent 50%
    );
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    pointer-events: none;
    transition: all 0.4s ease;
  }

  &:active::after {
    animation: ${rippleAnimation} 0.6s ease-out;
  }
`;
