import React, { useRef } from "react";
import classes from "./ContactForm.module.css"
import Image from "next/image";

const ContactForm = () => {
    const emailInputRef = useRef<any>();
    const nameInputRef = useRef<any>();

    const sendMessageHandler = () => {
        console.log(emailInputRef.current.value, "->email value");
        console.log(nameInputRef.current.value, "->name value");
    }

    return (
        <div className={classes.formContainer}>
            <div className={classes.titleContainer}>
                <h1 className={classes.title}>Lépjen kapcsolatba velünk</h1>
            </div>
            <form className={classes.form} onSubmit={sendMessageHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <Image className={classes.icon} src={"/assets/user.png"} alt="user" width={20} height={20}/>
                        <label className={classes.label} htmlFor="name">
                            <input className={classes.input} type="text" id="name" required ref={nameInputRef} placeholder={"Név..."}/>
                        </label>
                    </div>
                    <div className={classes.control}>
                        <Image className={classes.icon} src={"/assets/user_mail.png"} alt="user" width={20} height={20}/>
                        <label htmlFor="email">
                            <input className={classes.input} type="email" id="email" required ref={emailInputRef} placeholder="E-mail..."/>
                        </label>
                    </div>
                    <div className={classes.control}>
                        <Image className={classes.icon} src={"/assets/message.png"} alt="user" width={20} height={20}/>
                        <label className={classes.textAreaControl} htmlFor="message">
                            <textarea className={classes.textArea} name="message" id="message" cols={30} rows={5} required placeholder="Az ön üzenete..." />
                        </label>
                    </div>
                    <div>
                        <button className={classes.button}>
                            <Image className={classes.icon} src={"/assets/send.png"} alt="user" width={20} height={20}/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactForm