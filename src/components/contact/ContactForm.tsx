import React, { useRef, useState } from "react";
import classes from "./ContactForm.module.css"
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import { sendContactData } from "@/lib/api";
import { contactDataProps } from "types";

const ContactForm = () => {
    const emailInputRef = useRef<any>();
    const nameInputRef = useRef<any>();
    const messageInputRef = useRef<any>();
    const content = useSelector((state: RootState) => state.languages.contact)
    const [contactIsAvailable, setContactIsAvailable] = useState(false);

    const sendMessageHandler = async (event: any) => {
        event.preventDefault();
        const contactData: contactDataProps = {
            email: emailInputRef.current.value,
            name: nameInputRef.current.value,
            message: messageInputRef.current.value
        }

        await sendContactData(contactData).then(() => setContactIsAvailable(true));
    }

    return (
        <div className={classes.formContainer}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>{content.contactUs}</h1>
            </div>
            {contactIsAvailable ? (
                <div className={classes.replacerContainer}>
                    <p>{content.thanksMessage}</p>
                    <Image className={classes.succesfulIcon} src={"/assets/succesful.png"} alt="succesful" width={20} height={20}/>
                    <p>{content.succesfulMessage}</p>
                    <p>{content.ifMessage}<span className={classes.clickSpan} onClick={() => setContactIsAvailable(false)}> {content.clickHere}</span></p>
                </div>
            ) : (
                <form className={classes.form} onSubmit={(event) => (sendMessageHandler(event))}>
                    <div className={classes.controls}>
                        <div className={classes.control}>
                            <Image className={classes.icon} src={"/assets/user.png"} alt="user" width={20} height={20}/>
                            <label className={classes.label} htmlFor="name">
                                <input className={classes.input} type="text" id="name" required ref={nameInputRef} placeholder={`${content.name}...`}/>
                            </label>
                        </div>
                        <div className={classes.control}>
                            <Image className={classes.icon} src={"/assets/user_mail.png"} alt="user" width={20} height={20}/>
                            <label htmlFor="email" className={classes.label}>
                                <input className={classes.input} type="email" id="email" required ref={emailInputRef} placeholder={`${content.email}...`}/>
                            </label>
                        </div>
                        <div className={classes.control}>
                            <Image className={classes.icon} src={"/assets/message.png"} alt="user" width={20} height={20}/>
                            <label className={classes.textAreaControl} htmlFor="message">
                                <textarea className={classes.textArea} name="message" id="message" cols={5} rows={5} required placeholder={`${content.message}...`} ref={messageInputRef} />
                            </label>
                        </div>
                        <div className={classes.buttonContainer}>
                            <button className={classes.button}>
                                <Image className={classes.icon} src={"/assets/send.png"} alt="user" width={20} height={20}/>
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    )
}

export default ContactForm