import React from "react";
import * as B from "./styles";
import { ButtonProps } from "./types";

const Button = ({ label, ...props }: ButtonProps) => (
  <B.Button {...props}>{label}</B.Button>
);

export default Button;
