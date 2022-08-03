import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { WorkAuth } from '../../types';

export interface WorkAuthList {
    value: WorkAuth[];
    status: 'idle' | 'loading' | 'failed';
}

//define the initial state
const initialState: WorkAuthList = {
    value: [],
    status: 'idle'
};

export const workAuthListSlice = createSlice({
    name: 'workAuthList',
    initialState,
    reducers: {
        addWorkAuth: (state, action: PayloadAction<WorkAuth[]>) => {
            state.value = action.payload;
        },
        edditWorkAuth: (state, action: PayloadAction<WorkAuth[]>) => {

        }
    }
});

export const { addWorkAuth } = workAuthListSlice.actions;

export const slectWorkAuthList = (state: RootState) => state.workAuthList;

export default workAuthListSlice.reducer
