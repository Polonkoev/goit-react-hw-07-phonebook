import contactsReducer from './contacts/contactsSlise';
import  filterSlice  from './filter/filterSlice';
import {configureStore} from '@reduxjs/toolkit';
 export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterSlice
    }
 })