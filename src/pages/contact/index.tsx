import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import classes from "../../components/contact/ContactPage.module.css";
interface ContactPageProps {

}

const ContactPage = () => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.contentContainer}>
                <ContactForm />
                <ContactInfo />
            </div> 
        </div>
     
    )
}

export const getStaticProps:GetStaticProps<ContactPageProps> = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["navigation"])),
        },
        revalidate: 1
    }
}

export default ContactPage;