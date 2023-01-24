import { createContext, useState, useEffect } from "react";

export const CurrentUserContext = createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(()=>{

    }, [])

    return (
        <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUserContext.Provider>
    )
}
export default CurrentUserProvider