import { mailOptions, transporter } from '@/config/nodemailer';
import type { NextApiRequest, NextApiResponse } from 'next'
import { contactDataProps } from 'types'


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        console.log(req.body);
        const data = req.body;
        if(!data.name || !data.email || !data.message) {
            res.status(400).json({ message: "Bad request" });
        }

        try {
            await transporter.sendMail({
                ...mailOptions,
                subject: "New message from guest",
                text: "Place of email content",
                html: `<h2>Name</h2><big>${data.name}</big><h2>E-mail</h2><big>${data.email}</big><h2>Message</h2><big>${data.message}</big>`                
            })

            return res.status(200).json({ succes: true });
        } catch (error) {
            console.log(error)
            res.status(400).json({ message: "E-mail can not be send, something went wrong!" });
        }
        
    } 
    
    res.status(400).json({ message: "Bad request" })
}