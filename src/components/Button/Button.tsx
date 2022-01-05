import React from "react";

import "./Button.css";
import { ButtonProps } from "./types";

const Button = (props: ButtonProps) => <button>{props.label}</button>;

export default Button;
