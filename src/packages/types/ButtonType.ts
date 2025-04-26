import React, { MouseEventHandler } from "react";

export interface ButtonType {
  children?: React.ReactNode;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  color?: string;
  width?: string;
  height?: string;
}
