
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import blogSlice from './features/blogSlice/blogSlice';
import logger from 'redux-logger';

const store=configureStore({
    reducer:{
        blog:blogSlice
    },
    middleware:getDefaultMiddleware=>getDefaultMiddleware().concat(logger)
})

export default store;
