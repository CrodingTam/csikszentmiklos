import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

interface ContactPageProps {

}

const ContactPage = () => {
    return (
        <h1>Contact page</h1>
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