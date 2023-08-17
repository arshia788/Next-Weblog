
import {createSlice} from '@reduxjs/toolkit';

const initialState={
    blogCreatedValue:false
}

const blogSlice= createSlice({
    name:'blog',
    initialState,
    reducers:{
        created:(state, actions)=>{
            state.blogCreatedValue =true
        }
    }
})

console.log(initialState);



export default blogSlice.reducer;
export const {created}= blogSlice.actions;
export const blogCreatedValue = store=> store.blog.blogCreatedValue
