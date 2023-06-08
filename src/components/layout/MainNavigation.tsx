import React from "react";
import { useRouter } from "next/router";
import classes from "./MainNavigation.module.css"
import Image from "next/image";
import { NavigationLinkProps } from "types";
import Navigation from "./Navigation";
import LanguagesContainer from "./language/LanguagesContainer";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const MainNavigaton = () => {
    const router = useRouter();
    const navigationLinks = useSelector((state: RootState) => state.languages.navigationLinks);


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

    return (
        <div className={classes.gridMainContainer}>
            <div className={classes.gridItem}>
                <Navigation links={sectionOneNavigationLinks} />
            </div>
            <div className={`${classes.gridItem} ${classes.class1}`}>
                <div className={classes.maskLogo}>
                    <Image className={classes.logo} alt="csikszentmiklos_logo" src={"/assets/csikszentmiklos_logo.png"} width={210} height={150} />
                </div>
            </div>
            <div className={classes.gridItem}>
                <Navigation links={sectionTwoNavigationLinks} />
            </div>

            <LanguagesContainer/>
        </div>
    )
}

export default MainNavigaton;