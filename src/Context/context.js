import React, { useCallback, useContext, useState } from "react"

export const UserContext = React.createContext({
    setUser: (data) => "No Data",
    user: {
        "name": undefined,
        "email": undefined,
        "password": undefined
    }
})

export const useUserLogin = () => {
    const {setUser, user} = useContext(UserContext)
    return {setUser, user}
}

const withUserInfo = (Child) => {
    const WrappedComponent = (props) => {
        var [user, setUser] = useState({
            name: undefined,
            email: undefined,
            password: undefined,
          })
        const setUserCallback = useCallback((data) =>{
            setUser(data)
        }, [])
        return (<UserContext.Provider value={{setUser:setUserCallback, user}}>
            <Child {...props}></Child>
        </UserContext.Provider>)
    }
    return WrappedComponent
}
export default withUserInfo