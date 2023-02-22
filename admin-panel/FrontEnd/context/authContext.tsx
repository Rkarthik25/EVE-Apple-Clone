import React from "react"
import { createContext } from "react"
export const AuthContext= createContext: ();

function AuthContextProvider({children}){
    const [auth,setAuth]=React.useState(false)

    return (
        <div>
            <AuthContext.Provider value={{auth,setAuth}}>
{children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContextProvider;