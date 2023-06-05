import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import translationEN from "../../../public/locales/en/navigation.json";
import translationHU from "../../../public/locales/hu/navigation.json";
import translationRO from "../../../public/locales/ro/navigation.json";
import { useRouter } from "next/router";
import Link from "next/link";
import classes from "./MainNavigation.module.css"
import Image from "next/image";
import { NavigationLinkProps } from "types";
import Navigations from "./Navigation";

const MainNavigaton = () => {
    const [currentTranslation, setCurrentTranslation] = useState(translationHU);
    const router = useRouter();
    const [localeLanguage, setLocaleLanguage] = useState("hu" || "ro" || "en");
    const [displayLanguages, setDisplayLanguages] = useState(false);


    const changeLanguage = (language: string) => {
        //set the language into selected language
        router.locale = language;
        setLocaleLanguage(language);
        setDisplayLanguages(!displayLanguages);
    }

    const displayLanguagesHandler = () => {
        setDisplayLanguages(!displayLanguages);
    }

    console.log(localeLanguage)

    useEffect(() => {
        if (localeLanguage === "en") {
            setCurrentTranslation(translationEN);
        } else if (localeLanguage === "ro") {
            setCurrentTranslation(translationRO)
        } else {
            setCurrentTranslation(translationHU)
        }

    },[localeLanguage])

    useEffect(() => {
        setDisplayLanguages(false);
    }, [router.asPath])

    const sectionOneNavigationLinks: NavigationLinkProps[] = [
        {
            href: "/",
            name: `${currentTranslation.home}`
        },
        {
            href: "/economy",
            name: `${currentTranslation.economy}`
        },
        {
            href: "/institutions",
            name: `${currentTranslation.institutions}`
        }, 
    ];

    const sectionTwoNavigationLinks: NavigationLinkProps[] = [
        {
            href: "/gallery",
            name: `${currentTranslation.gallery}`
        },
        {
            href: "/teams",
            name: `${currentTranslation.teams}`
        },
        {
            href: "/contact",
            name: `${currentTranslation.contact}`
        }
    ]

    return (
        <div className={classes.gridMainContainer}>
            <div className={classes.gridItem}>
                <Navigations links={sectionOneNavigationLinks} />
            </div>
            <div className={`${classes.gridItem} ${classes.class1}`}>
                <div className={classes.maskLogo}>
                    <Image className={classes.logo} alt="csikszentmiklos_logo" src={"/assets/csikszentmiklos_logo.png"} width={210} height={150}></Image>
                </div>
            </div>
            <div className={classes.gridItem}>
                <Navigations links={sectionTwoNavigationLinks} />
            </div>
            <div className={classes.globe}>
                <Image className={classes.globeImage} key={"globe"} alt="globe" src={"/assets/globe.png"} width={50} height={50} onClick={displayLanguagesHandler}/>
                <div className={classes.languagesContainer} style={{display: displayLanguages === true ? "flex" : "none"}}>
                      {router.locales?.map((lng, index) => {
                            return (
                                <div key={index} className={classes.language} >
                                    <Link href={router.asPath} locale={lng} onClick={() => {changeLanguage(lng)}}>
                                        <Image alt={lng + "_flag"} src={`/assets/${lng}.png`} width={25} height={25}></Image>{lng}
                                    </Link>
                                </div>
                               
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default MainNavigaton;