import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../models/IUser';
import { AppDispatch } from '../';
import {userSlice} from '../../store/reducers/UserSlice';
//
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching());
//         const res = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//         dispatch(userSlice.actions.usersFetchingSuccess(res.data));
//     } catch (e: any) {
//         dispatch(userSlice.actions.usersFetchingError(e.message))
//     }
// }

// export const fetchUsers = createAsyncThunk(
//     'users/fetchAll',
//     async (_, thunkAPI) => {
//         try {
//             const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//             return response.data;
//         } catch (e) {
//             return thunkAPI.fulfillWithValue('Error :(')
//         }
//     }
// )