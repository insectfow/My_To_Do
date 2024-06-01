import { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  buttonClassName?: string;
  buttonContainerClassName?: string;
  buttonText: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  disabled,
  buttonClassName,
  buttonContainerClassName,
  buttonText,
}: ButtonProps) => {
  return (
    <div className={`button-container ${buttonContainerClassName || ""}`}>
      <button
        type="button"
        className={`button ${buttonClassName || ""}`}
        disabled={disabled}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
