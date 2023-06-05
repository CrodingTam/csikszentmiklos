import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

interface TeamsPageProps {

}

const TeamsPage = () => {
    return (
        <h1>Teams page</h1>
    )
}

export const getStaticProps:GetStaticProps<TeamsPageProps> = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["navigation"])),
        },
        revalidate: 1
    }
}

export default TeamsPage;