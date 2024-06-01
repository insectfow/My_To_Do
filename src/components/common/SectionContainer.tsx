import { FC } from "react";
import SectionTitle from "./SectionTitle";

interface SectionContainerProps {
  sectionTitle: string;
  sectionContainerClassName?: string;
  sectionTitleClassName?: string;
  children: React.ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({
  sectionTitle,
  sectionContainerClassName,
  sectionTitleClassName,
  children,
}: SectionContainerProps) => {
  return (
    <section className={`section-container ${sectionContainerClassName || ""}`}>
      <SectionTitle
        className={`${sectionTitleClassName || ""}`}
        title={sectionTitle}
      />
      {children}
    </section>
  );
};

export default SectionContainer;
