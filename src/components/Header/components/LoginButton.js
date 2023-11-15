import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"
import {Link} from "react-router-dom";	


export const LoginButton = () => {

    return(
        <div id="login" className="component-wrapper login">
            <div className="login-container"> 
                <Link to="login" className="login-wrapper">
                <div >
                    <p><FontAwesomeIcon icon={faUser} className="login-logo" /></p>
                    <p className="login-text">Login</p>
                </div>

                </Link>
            </div>
        </div>
    )
}