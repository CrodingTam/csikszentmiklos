import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

interface GalleryPageProps {
    
}

const GalleryPage = () => {
    return (
        <h1>Gallery page</h1>
    )
}

export const getStaticProps:GetStaticProps<GalleryPageProps> = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["navigation"])),
        },
        revalidate: 1
    }
}

export default GalleryPage;