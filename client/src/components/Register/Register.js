//React imports
import { useContext } from "react";
import {Link} from "react-router-dom";

//Internal imports (services,assets,custom hoooks,etc..)
import {AuthContext} from "../../contexts/AuthContext";
import {useForm} from "../../hooks/useForm";

import loginImage from '../../resources/images/login.jpg';


//Bootstrap imports
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    ConfirmPassword:'re-password'
};

const RegisterFormErrors = {
    EmailError: 'email',
    PasswordError: 'password',
    ConfirmPassword:'re-password'

};


    export const Register = () => {
        const { onRegisterSubmit } = useContext(AuthContext);
        const { values, errors , changeHandler, validateEmailHandler ,validatePasswordHandler, onSubmit } = useForm({
            [RegisterFormKeys.Email]: '',
            [RegisterFormKeys.Password]: '',
            [RegisterFormKeys.ConfirmPassword]: '',
        },
        {
            [RegisterFormErrors.Email]: '',
            [RegisterFormErrors.Password]: '',
            [RegisterFormErrors.ConfirmPassword]: '',
        }, onRegisterSubmit);

    
        return(
            <section className="login-section">
                
                <div className="container">
                    <div className="title-wrapper">
                            <h2>A<span>-Z</span></h2>
                            <h2>Construction</h2>
                    </div>
                    <div className="container-wrapper">
                       
                        <div className="form-image-wrapper">
                                <img src={loginImage}  alt="loginImg" />
                        </div>
        
                        <div className="form-wrapper">
                            <div className="inner-register-wrapper">
                                <h3>Sign Up</h3>
                            </div>
                            <Form onSubmit={onSubmit}>
                                <Form.Group as={Row} 
                                    className={`mb-3 ${errors[RegisterFormErrors.EmailError] ? 'has-error' : ''}`}
                                    controlId="formHorizontalEmail">
                            
                                    <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email "
                                        name="email"
                                        value={values.email}
                                        onChange={changeHandler} 
                                        onBlur={validateEmailHandler} 
                                        className={errors[RegisterFormErrors.EmailError] ? 'is-invalid': '' }
                                        />
                                    {errors[RegisterFormErrors.EmailError] && <div className="error-message">{errors[RegisterFormErrors.EmailError]}</div>}
                                    </Col>
                                </Form.Group>
        
                                <Form.Group as={Row} 
                                    className={`mb-3 ${errors[RegisterFormErrors.Password] ? 'has-error' : ''}`}
                                    controlId="formHorizontalPassword">
                            
                                    <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password" 
                                        name="password"
                                        value={values.password} 
                                        onChange={changeHandler} 
                                         onBlur={validatePasswordHandler}
                                         className={errors[RegisterFormErrors.PasswordError] ? 'is-invalid' : "" }
                                         />
                                    {errors[RegisterFormErrors.PasswordError] && <div className="error-message">{errors[RegisterFormErrors.PasswordError]}</div>}
                                    </Col>

                                    </Form.Group>
                                    <Form.Group as={Row} 
                                    controlId="formHorizontalConfirmPassword">

                                    <Col sm={10}>
                                        
                                    <Form.Control type="password" placeholder="Confirm Password" className="mb-3"
                                        name="re-password"
                                        value={values.confirmPassword} 
                                        onChange={changeHandler} 
                                         //onBlur={validatePassword}
                                         //className={passwordError ? 'is-invalid' : ''}
                                         />
                                    {/* {passwordError && <div className="error-message">{passwordError}</div>} */}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3">
                                    <Col sm={{ span: 10, offset: 3 }}>
                                    <Button type="submit">Sign up</Button>
                                    </Col>
                                </Form.Group>
                                <div className="or-section">
                                    <div className="border-line"></div>
                                        <span className="or-text">or</span>
                                    <div className="border-line"></div>
                                </div>
                                <div className="signup-wrapper"><Link to="/login">Have an account? Sign in.</Link></div>
                            </Form>
                        </div>
                    </div>
                </div>   
            </section>    
            )
        
    
}

export default Register;