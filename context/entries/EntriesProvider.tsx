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

    const addNewEntry = (description: string, title: string) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: "pending",
        };

        dispatch({ type: "[Entry] addEntry", payload: newEntry });
    };

    const updateEntry = (entry: Entry) => {
        dispatch({ type: "[Entry] updated", payload: entry });
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
