import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps{
    entries: Entry[];
    addNewEntry: (description: string, title: string) => void;
}

export const EntriesContext  = createContext({} as ContextProps)