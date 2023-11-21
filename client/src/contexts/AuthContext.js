import {useNavigate } from 'react-router-dom';
import { createContext } from "react";
import { toast } from "react-toastify";

import { getSession, setSession } from "../session/session";
import { authServiceFactory } from "../services/authService";


export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    
        const navigate = useNavigate();
        const authService = authServiceFactory(getSession()?.accessToken)
    
    
      const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);
    
            setSession(result)
            toast.success('Login successful')	
            navigate('/profile');
        } catch (error) {
          toast.error(`${Object.values (error)}`)
        }
    };
    
    
    const onRegisterSubmit = async (values) => {
      const { repassword, ...registerData } = values;
      if (repassword !== registerData.password) {
        return;
      }
      try {
          const result = await authService.register(registerData);
    
          setSession(result)
          toast.success('Register successful')
          navigate('/profile');
      } catch (error) {
        
        toast.error(`${Object.values (error)}`)
      }
    };
    
    const onLogout = async () => {

      await authService.logout();
    
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
