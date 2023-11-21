import { Navigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useContext,useEffect } from "react";
import { logoutSession } from "../../../session/session";







export const Logout = () => {
    const {onLogout} = useContext(AuthContext)

    useEffect(() => {
      onLogout();
      logoutSession('')
  }, [onLogout]);


  return <Navigate to="/" />
 

     
}

               