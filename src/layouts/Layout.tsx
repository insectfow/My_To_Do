import React, { FC } from "react";
import { LayoutProps } from "../types/types";
import Header from "./Header";

const Layout: FC<LayoutProps> = ({
  children,
  title,
  subTitle,
}: LayoutProps) => {
  return (
    <div className="App">
      {/* header */}
      <Header title={title} subTitle={subTitle} />
      {children}
    </div>
  );
};

export default Layout;
