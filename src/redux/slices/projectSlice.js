import { createSlice } from "@reduxjs/toolkit";
import ProjectData from "../../data/data";
const initialState = {
    projects: ProjectData
}

export const projectSlice = createSlice({
    name : "project",
    initialState,
    reducers : {
    }
})

export default projectSlice.reducer;