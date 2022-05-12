import { UIState } from "./UIProvider";



type UIActionType = 
| {type: 'UI- open sidebar'}
| {type: 'UI- close sidebar'}

export const uiReducer = (state: UIState, action:UIActionType):UIState => {

    switch(action.type){
        case 'UI- open sidebar':
            return {
                ...state,
                sidemenuOpen: true
            }
        case 'UI- close sidebar':
            return {
                ...state,
                sidemenuOpen: false
            }
        default:
            return state;

    }

}