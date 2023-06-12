import { contactDataProps } from "types"

export const sendContactData =  async (data: contactDataProps) => {
    fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        //when next.js see that header content type is application json, it will automatically parse the body
        headers: {
            "Content-Type": "application/json", 
            Accept: "application/json"
        }
    })
}