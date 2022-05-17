import { UIState } from "./UIProvider";



type UIActionType = 
| {type: 'UI- open sidebar'}
| {type: 'UI- close sidebar'}
| {type: 'UI- isAddingEntry', payload: boolean}
| {type: 'UI- startDragging'}
| {type: 'UI- endDragging'}

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
        case 'UI- isAddingEntry':
            return{
                ...state,
                isAddingEntry: action.payload
            }
        case 'UI- startDragging':
            return{
                ...state,
                isDragging: true
            }
        case 'UI- endDragging':
            return{
                ...state,
                isDragging: false
            }
        default:
            return state;

    }

}