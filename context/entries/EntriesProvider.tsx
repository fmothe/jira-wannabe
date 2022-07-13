import { ReactNode, useEffect, useReducer } from "react";
import { Entry } from "../../interfaces";
import { entriesReducer, EntriesContext } from "./";
import { v4 as uuidv4 } from "uuid";
import { entriesApi } from "../../api";

export interface EntriesState {
    entries: Entry[];
}
interface Props {
    children: ReactNode;
}
const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
};
export const EntriesProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

    const addNewEntry = async(description: string) => {
 
        const {data} = await entriesApi.post<Entry>("/entries",{
            description
        })

        dispatch({ type: "[Entry] addEntry", payload: data });
    };

    const updateEntry = async(entry: Entry) => {;
        try{
            const {data} = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
                description: entry.description,
                status: entry.status,
            });
            dispatch({ type: "[Entry] updated", payload: data });
        }catch(error){
            console.log(error);
        }
    };
    const refreshEntries = async () => {
        const {data} = await entriesApi.get<Entry[]>('/entries');
        dispatch({ type: "[Entry] refreshData", payload: data });
    };
    useEffect(() => {
        refreshEntries();
    }, []);

    return (
        <EntriesContext.Provider
            value={{
                ...state,
                addNewEntry,
                updateEntry,
            }}
        >
            {children}
        </EntriesContext.Provider>
    );
};
