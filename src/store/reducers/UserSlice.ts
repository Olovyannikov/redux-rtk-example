import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchUsers } from '../../store/reducers/ActionCreators';
import { IUser } from '../../models/IUser';

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    // extraReducers: {
    //     [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
    //         state.isLoading = false;
    //         state.error = null;
    //         state.users = action.payload;
    //     },
    //     [fetchUsers.pending.type]: (state) => {
    //         state.isLoading = true;
    //     },
    //     [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
    //         state.isLoading = false;
    //         state.error = action.payload
    //     }
    // }
});

export default userSlice.reducer;