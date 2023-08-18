
import {createSlice} from '@reduxjs/toolkit';

const initialState={
    blogCreatedValue:false,
    blogProfileUpdated:false
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
        }
    }
})




export default blogSlice.reducer;
export const {created, profileUpdated}= blogSlice.actions;
export const blogCreatedValue = store=> store.blog.blogCreatedValue
