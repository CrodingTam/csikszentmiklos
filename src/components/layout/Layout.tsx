import React, { Fragment } from "react";
import MainNavigaton from "./MainNavigation";
import Footer from "./Footer";
import classes from "./Layout.module.css";

interface LayoutProps {
  children: string | JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.mainContainer}>
      <MainNavigaton />
      <div className={classes.content}>{children}</div>
      <Footer />
      <div style={{display: "flex"}}></div>
    </div>
  );
};

export default Layout;