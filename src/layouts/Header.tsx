import { FC } from "react";
import { HeaderProps } from "../types/types";

const Header: FC<HeaderProps> = ({ title, subTitle }: HeaderProps) => {
  return (
    <header className="header">
      {title && <h1 className="header-title">{title}</h1>}
      {subTitle && <p className="header-subtitle">{subTitle}</p>}
    </header>
  );
};

export default Header;
