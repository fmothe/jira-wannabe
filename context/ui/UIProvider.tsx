import { ReactNode, useReducer } from 'react';
import { uiReducer ,UIContext} from '.';

export interface UIState {
    sidemenuOpen: boolean;
}


interface Props{
    children: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
};

export const UIProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({type: 'UI- open sidebar'});
    }

    const closeSideMenu = () => {
        dispatch({type: 'UI- close sidebar'});
    }
    
    return (<UIContext.Provider value={{
        ...state,
        openSideMenu,
        closeSideMenu
    }}>
        {children}
    </UIContext.Provider>)
};

