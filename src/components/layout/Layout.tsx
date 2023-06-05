import React, { Fragment } from "react";
import MainNavigaton from "./MainNavigation";

interface LayoutProps {
    children: string | JSX.Element | JSX.Element[];
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    return (
        <Fragment>
            <MainNavigaton />
            {children}
        </Fragment>
    )
}

export default Layout;