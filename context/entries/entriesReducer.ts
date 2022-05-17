import { Entry } from '../../interfaces';
import { EntriesState } from './EntriesProvider';


type EntriesActionType = 
    | {type: '[Entry] addEntry', payload: Entry}
    | {type: 'Entries- action2'}

export const entriesReducer = (state: EntriesState, action:EntriesActionType):EntriesState => {

    switch(action.type){
        case '[Entry] addEntry':
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        // case 'Entries- action2':
        //     return {
        //         ...state,
        //     }
        default:
            return state;

    }
}