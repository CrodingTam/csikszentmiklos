import React, { useState } from "react";
import classes from "./Footer.module.css"
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const Footer = () => {
    const currentDate = new Date().toLocaleDateString('ro-RO');
    const content = useSelector((state: RootState) => state.languages.footer);

    return (
        <div className={classes.mainContainer}>
            <div className={classes.commonContainer}>
                <div className={classes.logoContainer}>
                    <Image className={classes.mainLogo} alt="csikszentmiklos_logo" src={"/assets/csikszentmiklos_logo.png"} width={210} height={200} />
                    {content.date}: {currentDate}
                </div>
                <div className={classes.separatorContainer}></div>
            </div>


            <div className={classes.commonContainer}>
                <div className={classes.subCommonContainer}>
                    <h2 className={classes.title}>{content.reservation}</h2>
                    <div className={classes.reservationContainer}>
                        <div className={classes.reservationInfoContainer}>
                            <span className={classes.subTitle}>{content.firstQuestion}</span> 
                            <span className={classes.reservationInfo}>
                                {content.firstAnswer} kattintson ide:
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/home.png"} width={200} height={200} />
                            </span>
                        </div>
                        <div className={classes.reservationInfoContainer}>
                            <span className={classes.subTitle}>{content.secondQuestion}</span> 
                            <span className={classes.reservationInfo}>
                                {content.secondAnswer} kattintson ide:
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/forest_house.png"} width={200} height={200} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={classes.separatorContainer}></div>
            </div>
        
            <div className={classes.commonContainer}>
                <div className={classes.subCommonContainer}>
                    <h2 className={classes.title}>{content.volunteerTeams}</h2>
                    <div className={classes.teamsContainer}>
                        <div className={classes.team}>
                            <Image className={classes.icon} alt="csie_logo" src={"/assets/csie_logo.png"} width={200} height={200} />
                            <div className={classes.mediaIconsContainer}>
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/facebook.png"} width={200} height={200} />
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/tik-tok.png"} width={200} height={200} />
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/instagram.png"} width={200} height={200} />
                            </div>
                        </div>
                        <div className={classes.team}>
                            <Image className={classes.icon} alt="old_logo" src={"/assets/old_club_logo.png"} width={210} height={200} />
                            <div className={classes.mediaIconsContainer}>
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/information.png"} width={200} height={200} />
                            </div>
                        </div>
                        <div className={classes.team}>
                            <Image className={classes.icon} alt="fire_logo" src={"/assets/fire_brigade_logo.png"} width={210} height={200} />
                            <div className={classes.mediaIconsContainer}>
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/facebook.png"} width={200} height={200} />
                            </div>
                        </div>
                        <div className={classes.team}>
                            <Image className={classes.butchersIcon} alt="butchers_logo" src={"/assets/butchers_logo.png"} width={210} height={200} />
                            <div className={classes.mediaIconsContainer}>
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/information.png"} width={200} height={200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

