import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import axios from 'axios';

export type ContactData = {
    name: string,
    email: string,
    message: string
}

export interface ContactState {
    status: 'sent' | 'sending' | 'not' | 'failed'
}

const initialState: ContactState = {
    status: 'not',
};

export const contactPost = createAsyncThunk(
    'contact/save',
    async (contactData: ContactData) => {
        // The value we return becomes the `fulfilled` action payload
        const result = await axios.post('/.netlify/functions/contact-us-form', JSON.stringify(contactData))
        return result.data;
    }
);

export const menuSlice = createSlice({
    name: 'contact',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {},
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    extraReducers: (builder) => {
        builder
            .addCase(contactPost.pending, (state) => {
                state.status = 'sending';
            })
            .addCase(contactPost.fulfilled, (state, action) => {
                state.status = 'sent';
            })
            .addCase(contactPost.rejected, (state) => {
                state.status = 'failed';
            });
    },
});
export const contactState = (state: ContactState) => state.status;


export default menuSlice.reducer;