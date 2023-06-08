import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import navigationEN from "../../public/locales/en/navigation.json";
import navigationHU from "../../public/locales/hu/navigation.json";
import navigationRO from "../../public/locales/ro/navigation.json";
import { navigationLanguageLinks } from 'types';


export interface languagesState {
    navigationLinks: navigationLanguageLinks;
    language: string;
    displayLanguages: boolean;
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
    language: ''
}

export const languagesSlice = createSlice({
    name: "languages",
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<string>) => {
            state.language = action.payload;
            switch (action.payload) {
                case "hu":
                    console.log("Magyar")
                    state.navigationLinks = navigationHU;
                    break;
                case "en":
                    console.log("English")
                    state.navigationLinks = navigationEN;
                    break;
                case "ro":
                    console.log("Romania")
                    state.navigationLinks = navigationRO;
                    break;
            }
        },
        setDisplayLanguages: (state, action: PayloadAction<boolean>) => {
            state.displayLanguages = action.payload;
        }
    }
})

// Action creators are generated for each case reducer function
export const { setLanguage, setDisplayLanguages } = languagesSlice.actions

export default languagesSlice.reducer
