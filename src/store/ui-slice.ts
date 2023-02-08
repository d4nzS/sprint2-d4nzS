import { createSlice } from '@reduxjs/toolkit';

interface UIState {
    navbarIsShown: boolean;
    windowWidth: number;
}

const initialState: UIState = {
    navbarIsShown: false,
    windowWidth: window.innerWidth
};

const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        toggleNavbar(state) {
            state.navbarIsShown = !state.navbarIsShown;
        },
        hideNavbar(state) {
            state.navbarIsShown = false;
        },
        getWindowWidth(state) {
            state.windowWidth = window.innerWidth;
        }
    }
});

export const uiActions = uiSlice.actions;

export default uiSlice;
