import {useNavigate } from 'react-router-dom';


import { getSession, setSession } from "../session/session";
import { authServiceFactory } from "../services/authService";

import { createContext } from "react";

export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    
        const navigate = useNavigate();
        const authService = authServiceFactory(getSession()?.accessToken)
    
    
      const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
    
            setSession(result)
    
            navigate('/profile');
        } catch (error) {
            console.log(error);
        }
    };
    
    
    const onRegisterSubmit = async (values) => {
      const { confirmPassword, ...registerData } = values;
      if (confirmPassword !== registerData.password) {
          return;
      }
    
      try {
          const result = await authService.register(registerData);
    
          setSession(result)
    
          navigate('/profile');
      } catch (error) {
          console.log('There is a problem');
      }
    };
    
    const onLogout = async () => {
      await authService.logout();
    
      setSession({})
    };
    
     
    
      const contextValue = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        userId: getSession()?._id,
        token: getSession()?.accessToken,
        userEmail: getSession()?.email,
        isAuthenticated: !!getSession()?.accessToken,
      }

    return (

        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
