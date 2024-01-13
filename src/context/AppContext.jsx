import { createContext, useState } from "react";

export const AppContext=createContext()

export default function AppProviderData({children}){
    const [loading,setLoading]=useState("true")

    const value={loading,setLoading}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}