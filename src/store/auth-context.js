import React, {useState, useEffect} from "react";


const AuthContext = React.createContext({
        isLoggedIn:false,
        onLogout: () => {},
        onLogin: (email, password) => {}
    });

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
        if (storedUserLoggedInInformation === '1'){
            setIsLoggedIn(true);
        }
    })

    function logoutHandler(){
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    }

    function loginHandler(){
        localStorage.setItem('isLogegdIn', '1');
        setIsLoggedIn(true);
    }

    return (
        <AuthContextProvider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
            >
            {props.children}
        </AuthContextProvider>
    );
}
export default  AuthContext;