import { Entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider';


type EntriesActionType = 
    | {type: '[Entry] addEntry', payload: Entry}
    | {type: '[Entry] updated', payload:Entry}
    | {type: '[Entry] refreshData', payload:Entry[]}

export const entriesReducer = (state: EntriesState, action:EntriesActionType):EntriesState => {

    switch(action.type){
        case '[Entry] addEntry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case '[Entry] updated':
            return {
                ...state,
                entries: state.entries.map(entry => {
                    if(entry._id === action.payload._id){
                        entry.status = action.payload.status
                        entry.description = action.payload.description
                    }
                    return entry;
                })
            }
        case '[Entry] refreshData':
            return {
                ...state,
                entries: [...action.payload]
            }
        default:
            return state;

    }
}