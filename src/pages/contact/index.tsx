import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import classes from "../../components/contact/ContactPage.module.css";

interface ContactPageProps {}

const ContactPage = () => {

    return (
        <div className={classes.mainContainer}>
            <div className={classes.contactContainer}>
                <div className={classes.contentContainer}>
                    <ContactForm />
                    <ContactInfo />
                </div>
            </div>
            <div className={classes.mapContainer}>
                <iframe className={classes.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2749.5028117765874!2d25.83898479195046!3d46.438733393400454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474ad7f6f2a88f7d%3A0x8082d3632d411af5!2sComposesoratul%20Nicoles%C8%99ti!5e0!3m2!1shu!2sro!4v1686253779692!5m2!1shu!2sro" width="600" height="450" loading="lazy"></iframe>
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