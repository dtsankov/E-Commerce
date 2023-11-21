import { AuthContext } from "../../../contexts/AuthContext";
import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRightFromBracket} from "@fortawesome/free-solid-svg-icons"




export const LogoutButton = () => {
    const {onLogout} = useContext(AuthContext)


    return(
        <button className="login-wrapper logout-button" onClick={onLogout}>
        <div>
          <p>
            <FontAwesomeIcon icon={faArrowRightFromBracket} className="login-logo" />
          </p>
          <p className="login-text">Logout</p>
        </div>
      </button>
          
    )
}