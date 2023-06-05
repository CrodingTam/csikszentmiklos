import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import React from "react";

interface EconomyPageProps {

}

const EconomyPage = () => {
    return (
        <h1>Economy page</h1>
    )
}

export const getStaticProps:GetStaticProps<EconomyPageProps> = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["navigation"])),
        },
        revalidate: 1
    }
}

export default EconomyPage;