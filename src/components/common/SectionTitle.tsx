import { FC } from "react";

interface SectionTitleProps {
  title: string;
  className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, className }) => {
  return <h3 className={`section-title ${className || ""}`}>{title}</h3>;
};

export default SectionTitle;
