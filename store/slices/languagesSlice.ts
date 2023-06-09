import { PayloadAction, createSlice, isAction } from '@reduxjs/toolkit'
import navigationEN from "../../public/locales/en/navigation.json";
import navigationHU from "../../public/locales/hu/navigation.json";
import navigationRO from "../../public/locales/ro/navigation.json";
import contactEN from "../../public/locales/en/contact.json";
import contactHU from "../../public/locales/hu/contact.json";
import contactRO from "../../public/locales/ro/contact.json";
import footerEN from "../../public/locales/en/footer.json";
import footerHU from "../../public/locales/hu/footer.json";
import footerRO from "../../public/locales/ro/footer.json";
import { contactLanguageProps, footerLanguageProps, navigationLanguageLinks } from 'types';


export interface languagesState {
    navigationLinks: navigationLanguageLinks;
    language: string;
    displayLanguages: boolean;
    contact: contactLanguageProps;
    footer: footerLanguageProps;
}

const initialState: languagesState = {
    displayLanguages: false,
    navigationLinks: {
        home: navigationHU.home,
        contact: navigationHU.contact,
        economy: navigationHU.economy,
        gallery: navigationHU.gallery,
        institutions: navigationHU.institutions,
        teams: navigationHU.teams
    },
    language: '',
    contact: {
        address: contactHU.address,
        availability: contactHU.availability,
        contactability: contactHU.contactability,
        contactUs: contactHU.contactUs,
        email: contactHU.email,
        message: contactHU.message,
        name: contactHU.name,
        postalCode: contactHU.postalCode,
        telephoneNumber: contactHU.telephoneNumber,
        addressDetail: contactHU.addressDetail,
        clickHere: contactHU.clickHere,
        ifMessage: contactHU.ifMessage,
        submit: contactHU.submit,
        succesfulMessage: contactHU.succesfulMessage,
        thanksMessage: contactHU.thanksMessage
    },
    footer: {
        date: footerHU.date,
        firstAnswer: footerHU.firstAnswer,
        firstQuestion: footerHU.firstQuestion,
        reservation: footerHU.reservation,
        secondAnswer: footerHU.secondAnswer,
        secondQuestion: footerHU.secondQuestion,
        volunteerTeams: footerHU.volunteerTeams
    }
}

export const languagesSlice = createSlice({
    name: "languages",
    initialState,
    reducers: {
        setDisplayLanguages: (state, action: PayloadAction<boolean>) => {
            state.displayLanguages = action.payload;
        },
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            switch (action.payload) {
                case "hu":
                    console.log("magyar")
                    state.contact = contactHU;
                    state.navigationLinks = navigationHU;
                    state.footer = footerHU;
                    break;
                case "en":
                    console.log("angol")
                    state.contact = contactEN;
                    state.navigationLinks = navigationEN;
                    state.footer = footerEN;
                    break;
                case "ro":
                    console.log("roman")
                    state.contact = contactRO;
                    state.navigationLinks = navigationRO;
                    state.footer = footerRO;
                    break;
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const { setDisplayLanguages, setLanguage } = languagesSlice.actions

export default languagesSlice.reducer
