
import {createSlice} from '@reduxjs/toolkit';

const initialState={
    blogCreatedValue:false,
    blogProfileUpdated:false,
    blogUpdate:false,
}

const blogSlice= createSlice({
    name:'blog',
    initialState,
    reducers:{
        created:(state, action)=>{
            state.blogCreatedValue =action.payload
        },
        profileUpdated:(state, action)=>{
            state.blogProfileUpdated =action.payload
        },
        blogUpdated:(state, action)=>{
            state.blogUpdate =action.payload
        }
    }
})




export default blogSlice.reducer;
export const {created, profileUpdated, blogUpdated}= blogSlice.actions;
