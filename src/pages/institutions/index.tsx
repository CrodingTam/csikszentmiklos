import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

interface InstitutionsPageProps {

}

const InstitutionsPage = () => {
    return (
        <h1>Institutions page</h1>
    )
}

export const getStaticProps:GetStaticProps<InstitutionsPageProps> = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["navigation"])),
        },
        revalidate: 1
    }
}

export default InstitutionsPage;