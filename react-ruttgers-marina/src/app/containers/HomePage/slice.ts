import { createSlice } from "@reduxjs/toolkit";
import { IHomePageState } from "./type";

const initialState: IHomePageState = {
    topBoats: [],
}

export const homePageSlice = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setTopBoats: (state, action) => {
            state.topBoats = action.payload;
        }
    }
});

export const { setTopBoats } = homePageSlice.actions;
export default homePageSlice.reducer;