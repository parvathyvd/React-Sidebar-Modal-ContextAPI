import React, { useState, useContext } from 'react'

const AppContext = React.createContext();



const AppProvider  = ({children}) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [modalOpen, setmodalOpen] = useState(false);

    const openModal = () => {
        setmodalOpen(true);
    }
    const closeModal = () => {
        // console.log('close it');
        setmodalOpen(false);
    }
    const openSidebar = () => {
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        setSidebarOpen(false);
    }
    return <AppContext.Provider value={{sidebarOpen, modalOpen, openModal, closeModal, openSidebar, closeSidebar}}>{children}</AppContext.Provider>
}

//use custom hook - always satrt with useThenName
export const useGlobalContext  = () => useContext(AppContext)


export {AppContext, AppProvider}