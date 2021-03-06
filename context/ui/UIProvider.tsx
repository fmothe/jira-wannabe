import { ReactNode, useReducer } from 'react';
import { uiReducer ,UIContext} from '.';

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}


interface Props{
    children: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false
};

export const UIProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({type: 'UI- open sidebar'});
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI- close sidebar'});
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({type: 'UI- isAddingEntry', payload:isAdding})
    }
    
    const startDragging = () =>{
        dispatch({type: 'UI- startDragging'})
    }

    const endDragging = () => {
        dispatch({type: 'UI- endDragging'})
    }
    return (<UIContext.Provider value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry,
        startDragging,
        endDragging
    }}>
        {children}
    </UIContext.Provider>)
};

