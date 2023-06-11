import React from "react";
import classes from  "./ContactInfo.module.css";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = () => {
    return (
        <div className={classes.infoContainer}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Elérhetőség</h1>
            </div>
            <div className={classes.info}>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/mail.png"} alt="mail" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>E-mail: <span className={classes.contentSpan}>csikszentmiklos@gmail.com</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/phone.png"} alt="phone" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>Telefonszám: <span className={classes.contentSpan}>0266 346 415</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/location.png"} alt="location" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>Cím: <span className={classes.contentSpan}>Románia, Csíkszentmiklós ...</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/phone-call.png"} alt="phone-call" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>Hívhatóság: <span className={classes.contentSpan}>9:00-17:00</span></span>
                </div>
                <div className={classes.iconContainer}>
                    <Image className={classes.icon} src={"/assets/letter.png"} alt="letter" width={20} height={20}/>
                    <span className={classes.iconNameSpan}>Írányítószám: <span className={classes.contentSpan}>537118</span></span>
                </div>
            </div>
            <div className={classes.imageContainer}>
                <Image className={classes.image} alt="csikszentmiklos_common" src={"/assets/csikszentmiklos_common.png"} width={500} height={225}/>
            </div>
        </div>
    )
}

export default ContactInfo;