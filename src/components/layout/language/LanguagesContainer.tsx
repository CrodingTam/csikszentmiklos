import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "../MainNavigation.module.css"
import { useDispatch, useSelector } from "react-redux";
import { setDisplayLanguages, setLanguage} from "store/slices/languagesSlice";
import { AppDispatch, RootState } from "store/store";

const LanguagesContainer = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    const displayLanguages = useSelector((state: RootState) => state.languages.displayLanguages);

    const changeLanguage = (language: string) => {
        //set the language into selected language
        router.locale = language;
        dispatch(setLanguage(language))
        dispatch(setDisplayLanguages(!displayLanguages))
    }

    const displayLanguagesHandler = () => {
        dispatch(setDisplayLanguages(!displayLanguages))
    }
    
    useEffect(() => {
        //dispatch
        setDisplayLanguages(false);
    }, [router.asPath])

    return (
        <div className={classes.globe}>
            <Image className={classes.globeImage} key={"globe"} alt="globe" src={"/assets/globe.png"} width={50} height={50} onClick={displayLanguagesHandler}/>
            <div className={classes.languagesContainer} style={{display: displayLanguages === true ? "flex" : "none"}}>
                {router.locales?.map((lng: string, index: number) => {
                    return (
                        <div key={index} className={classes.flagContainer} >
                            <Link href={router.asPath} locale={lng} onClick={() => {changeLanguage(lng)}}>
                                <Image className={classes.flag} alt={lng + "_flag"} src={`/assets/${lng}.png`} width={25} height={25} />
                            </Link>
                        </div>
                        
                    )
                })}
            </div>
        </div>       
    )
}

export default LanguagesContainer;