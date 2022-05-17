import { createContext } from 'react';

interface ContextProps{
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
    endDragging: () => void;
    startDragging: () => void;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
}

export const UIContext  = createContext({} as ContextProps)