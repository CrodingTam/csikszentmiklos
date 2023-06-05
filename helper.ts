import { useTranslation } from "react-i18next";
const fs = require("fs");
import path from "path";
import { LanguageProps } from "@/components/layout/Navigation";

const getNavigationLinks = () => {
    let data = {};

}

export const getLanguages = () => {
    const folderPath = path.join(process.cwd(), "public/locales")

    const folders = fs.readdirSync(folderPath, {withFileTypes: true})
    .filter((dirent: { isDirectory: () => any; }) => dirent.isDirectory())
    .map((dirent: { name: any; }) => dirent.name);

    const jancsika: LanguageProps[] = [];

    for (let i = 0; i < folders.length; i++) {
        jancsika.push({name: folders[i]})
    }

    
    return jancsika;
}

export const languages: LanguageProps[] = [
    {
        name: "hu"
    },
    {
        name: "ro"
    },
    {
        name: "en"
    }
]

export default getNavigationLinks;