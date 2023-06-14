import React, { useState } from "react";
import classes from "./MainNavigation.module.css"
import Image from "next/image";
import { NavigationLinkProps } from "types";
import Navigation from "./Navigation";
import LanguagesContainer from "./language/LanguagesContainer";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const MainNavigaton = () => {
    const navigationLinks = useSelector((state: RootState) => state.languages.navigationLinks);
    const [mobileNavigation, setMobileNavigation] = useState(false);

    const sectionOneNavigationLinks: NavigationLinkProps[] = [
        {
            href: "/",
            name: `${navigationLinks.home}`
        },
        {
            href: "/economy",
            name: `${navigationLinks.economy}`
        },
        {
            href: "/institutions",
            name: `${navigationLinks.institutions}`
        }, 
    ];

    const sectionTwoNavigationLinks: NavigationLinkProps[] = [
        {
            href: "/gallery",
            name: `${navigationLinks.gallery}`
        },
        {
            href: "/teams",
            name: `${navigationLinks.teams}`
        },
        {
            href: "/contact",
            name: `${navigationLinks.contact}`
        }
    ]

    const displayNavigationHandler = () => {
        setMobileNavigation(!mobileNavigation);
    }

    const allNavigationLinks = [...sectionOneNavigationLinks, ...sectionTwoNavigationLinks];

    return (
        <div className={classes.gridMainContainer}>
            <div className={`${classes.gridItem} ${classes.desktopNavigation}`}>
                <Navigation links={sectionOneNavigationLinks} mobileNavigation={false} />
            </div>
            <div className={`${classes.gridItem} ${classes.class1}`}>
                <div className={classes.maskLogo}>
                    <Image className={classes.logo} alt="csikszentmiklos_logo" src={"/assets/csikszentmiklos_logo.png"} width={210} height={150} />
                </div>
            </div>
            <div className={classes.menuContainer}>
                <Image className={classes.menuIcon} alt="menu" src={"/assets/menu.png"} width={100} height={100} onClick={displayNavigationHandler}/>
            </div>
            <div className={`${classes.gridItem} ${classes.desktopNavigation}`}>
                <Navigation links={sectionTwoNavigationLinks} mobileNavigation={false}/>
            </div>

            <LanguagesContainer/>

            {/* in case of mobile view */}
            {mobileNavigation &&    
                <div className={classes.mobileNavigation}>
                    <Navigation links={allNavigationLinks} mobileNavigation={mobileNavigation} onClickClose={displayNavigationHandler}/>
                </div>
            }
         
        </div>
    )
}

export default MainNavigaton;