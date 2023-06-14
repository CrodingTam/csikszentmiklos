import React, { useState } from "react";
import classes from "./Footer.module.css"
import Image from "next/image";

const Footer = () => {
    const currentDate = new Date().toLocaleDateString('ro-RO');

    return (
        <div className={classes.mainContainer}>
            <div className={classes.commonContainer}>
                <div className={classes.logoContainer}>
                    <Image className={classes.mainLogo} alt="csikszentmiklos_logo" src={"/assets/csikszentmiklos_logo.png"} width={210} height={200} />
                    Dátum: {currentDate}
                </div>
                <div className={classes.separatorContainer}></div>
            </div>


            <div className={classes.commonContainer}>
                <div className={classes.subCommonContainer}>
                    <h2 className={classes.title}>Foglalás</h2>
                    <div className={classes.reservationContainer}>
                        <div className={classes.reservationInfoContainer}>
                            <span className={classes.subTitle}>Rendezvényekre alkalmas helyet keres?</span> 
                            <span className={classes.reservationInfo}>
                                Nálunk megtalálja, kattintson ide:
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/home.png"} width={200} height={200} />
                            </span>
                        </div>
                        <div className={classes.reservationInfoContainer}>
                            <span className={classes.subTitle}>Természetben szeretni pihenni a barátaival, családjával?</span> 
                            <span className={classes.reservationInfo}>
                                Itt a megoldás, kattintson ide:
                                <Image className={classes.mediaIcon} alt="csie_logo" src={"/assets/forest_house.png"} width={200} height={200} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className={classes.separatorContainer}></div>
            </div>
        
            <div className={classes.commonContainer}>
                <div className={classes.subCommonContainer}>
                    <h2 className={classes.title}>Önkéntes Csapatok</h2>
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

