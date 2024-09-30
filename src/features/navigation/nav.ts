import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum MenuItems {
    Hero,
    About,
    Resume,
    Publications,
    Services,
    Contact
}

export interface MenuState {
    status: 'open' | 'close';
    active: MenuItems;
}

const initialState: MenuState = {
    status: 'open',
    active: MenuItems.Hero,
};

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        open: (state) => {
            state.status = 'open';
        },
        close: (state) => {
            state.status = 'close';
        },
        toggle: (state) => {
            if(state.status === 'open'){
                state.status = 'close'
            } else {
                state.status = 'open'
            }
        },
        activeEntry: (state, action: PayloadAction<MenuItems>) => {
            state.active = action.payload
        }
    },
});
export const { open, close, toggle, activeEntry } = menuSlice.actions;
export const navState = (state: RootState) => state.menu.status;
export const activeMenuItem = (state: RootState) => state.menu.active;


export default menuSlice.reducer;