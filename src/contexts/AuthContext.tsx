import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
    userId: null,
    setUserId: (newId: string) => {},
});


const AuthCompotextComponent = ({children}) => {
    const [userId, setUserId] = useState(null)
    return (
       ( <AuthContext.Provider value={{ userId, setUserId}}>
           {children}
        </AuthContext.Provider>)
    )
}


export default AuthCompotextComponent

export const useAuthContext = () => useContext(AuthContext);