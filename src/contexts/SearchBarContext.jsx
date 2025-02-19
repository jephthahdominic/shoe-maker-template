import { createContext, useContext, useReducer } from "react";

const initialState = {
    isActive: false,
    status:null,
    searchQuery: null,
}

function reducer(state, action){
    switch(action.type){
        case "openSearch":
            return {...state, isActive:true}
        case "closeSearch":
            return initialState
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

function useSearch(){
    const context = useContext(SearchBarContext);
    if(!context){
        console.log("you cannot use context outside its provider")
    }
    return context;
}

export {SearchBarProvider, useSearch}