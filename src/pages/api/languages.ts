import { LanguageProps } from "@/components/layout/Navigation";
import { getLanguages } from "helper";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        console.log("the request method is GET");
        
        const languages: LanguageProps[] = getLanguages();

        res.status(200).json({
            message: "Languages transported",
            transportedLanguages: languages
        })
    }
}

export default handler;