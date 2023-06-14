import { GetStaticProps } from "next";
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
interface HomePageProps {

}

const HomePage: React.FC<HomePageProps> = (props) => {
    
    return (
        <div>
            {/* <h1>HomePage</h1> */}
        </div>
    )
}

export const getStaticProps:GetStaticProps<HomePageProps> = async ({locale}) => {
    return {
        props: {
            ...(await serverSideTranslations(locale as string, ["navigation"])),
        },
        revalidate: 1
    }
}

export default HomePage;