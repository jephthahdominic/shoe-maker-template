import { createContext, useReducer } from "react";

const initialState = {
    isActive: false,
    status:null,
    searchQuery: null,
}

function reducer(state, action){
    switch(action.type){
        
    }
}

const SearchBarContext = createContext();

function SearchBarProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <SearchBarContext.Provider value={{state, dispatch}}>
            {children}
        </SearchBarContext.Provider>
    )
}