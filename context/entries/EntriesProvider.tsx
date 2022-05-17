import { ReactNode, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { entriesReducer ,EntriesContext} from './';
import { v4 as uuidv4 } from 'uuid';


export interface EntriesState {
    entries: Entry[];
}
interface Props{
    children: ReactNode;
}
const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            title: 'first entry',
            description: ' Pendiente: Mollit aute magna labore veniam est voluptate proident cupidatat irure.',
            status:'pending',
            createdAt: Date.now(),
            
        },
        {
            _id: uuidv4(),
            description: 'In-Progress Magna et laboris ea fugiat dolore fugiat sunt est in dolore cillum minim proident non.',
            title: 'second entry',
            status:'in-progress',
            createdAt: Date.now(),

        },
        {
            _id: uuidv4(),
            description: 'Finished: Eiusmod adipisicing do officia magna nostrud eiusmod esse sunt.',
            title:'third entry',
            status:'finished',
            createdAt: Date.now(),

        }
    ],
};
export const EntriesProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = (description: string, title: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            title,
            description,
            createdAt:Date.now(),
            status:'pending'
        }

        dispatch({type: '[Entry] addEntry', payload: newEntry})
    }

    const updateEntry = (entry: Entry) => {
        dispatch({type: '[Entry] updated', payload: entry})
    }
    return (<EntriesContext.Provider value={{
         ...state,
         addNewEntry,
         updateEntry
    }}>
        {children}
    </EntriesContext.Provider>)
};