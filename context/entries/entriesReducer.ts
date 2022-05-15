import { EntriesState } from './EntriesProvider';


type EntriesActionType = 
    | {type: 'Entries- action1'}
    | {type: 'Entries- action2'}

export const entriesReducer = (state: EntriesState, action:EntriesActionType):EntriesState => {

    switch(action.type){
        // case 'Entries- action1':
        //     return {
        //         ...state,
        //     }
        // case 'Entries- action2':
        //     return {
        //         ...state,
        //     }
        default:
            return state;

    }
}