export interface ButtonProps {
  label: string;
  variant: "fill" | "outline";
  onClick?: () => void;
  theme: "light" | "dark";
}
