import { createContext, useContext, useState } from "react";

const sideBarContext = createContext();

function SideBarProvider({children}){
    const [openSidebar, setOpenSidebar] = useState(false);

    function ToggleSideBar(){
        setOpenSidebar(s=>!s)
    }

    return <sideBarContext.Provider value={{openSidebar, ToggleSideBar}}>
        {children}
    </sideBarContext.Provider>
}

function useSideBar(){
    const context = useContext(sideBarContext);
    if(!context) throw new Error("You cannot use the context outside the provider")
    return context
}

export {SideBarProvider, useSideBar}