import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';
import {v4 as uuidv4} from 'uuid';

export interface EntriesState {
    entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
            createdAt: Date.now(),
            status: 'pending',
        },
        {
            _id: uuidv4(),
            description: 'In-progres: Lorem ipsum cccc gdfgdgfdgdggd',
            createdAt: Date.now(),
            status: 'in-progress',
        },
        {
            _id: uuidv4(),
            description: 'Completed: Lorem ipsum dolor sit amet consectetur adipisicing  dfgdfgdg  am, quod.',
            createdAt: Date.now(),
            status: 'completed',
        }
    ]
}

export const EntriesProvider:FC = ({ children }) => {

    const [state, dispatch] = useReducer( entriesReducer, ENTRIES_INITIAL_STATE );
    
    const addNewEntry = ( description:string ) => {

        const newEntry:Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] - add-Entry', payload: newEntry });
    }

    const updateEntry = ( entry:Entry ) => {
        dispatch({ type: '[Entry] - entry-updated', payload: entry });
    }

    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry,
        }}>
           { children }
        </EntriesContext.Provider>
    );
};