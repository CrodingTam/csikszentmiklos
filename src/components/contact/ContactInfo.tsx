import React from "react";
import classes from  "./ContactInfo.module.css";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const ContactInfo = () => {
    const content = useSelector((state: RootState) => state.languages.contact)

    return (
        <div className={classes.infoContainer}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>{content.availability}</h1>
            </div>
            <div className={classes.info}>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/mail.png"} alt="mail" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>{content.email}: <span className={classes.contentSpan}>csikszentmiklos@gmail.com</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/phone.png"} alt="phone" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>{content.telephoneNumber}: <span className={classes.contentSpan}>0266 346 415</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/location.png"} alt="location" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>{content.address}: <span className={classes.contentSpan}>Románia, Csíkszentmiklós ...</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/phone-call.png"} alt="phone-call" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>{content.contactability}: <span className={classes.contentSpan}>9:00-17:00</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/letter.png"} alt="letter" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>{content.postalCode}: <span className={classes.contentSpan}>537118</span></span>
                </div>
            </div>
            <div className={classes.imageContainer}>
                <Image className={classes.image} alt="csikszentmiklos_common" src={"/assets/csikszentmiklos_common.png"} width={500} height={225}/>
            </div>
        </div>
    )
}

export default ContactInfo;