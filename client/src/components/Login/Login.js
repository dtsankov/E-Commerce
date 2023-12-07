//React imports
import { useContext } from "react";
import {Link} from "react-router-dom";
 

//Internal imports (services,assets,custom hoooks,etc..)

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

import loginImage from '../../resources/images/login.jpg';
import {FaFacebook } from 'react-icons/fa'
import { SiGoogle } from 'react-icons/si';

//Bootstrap imports
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
};

const LoginFormErrors = {
    EmailError: 'email',
    PasswordError: 'password'
};

 const Login = () => {
    const {onLoginSubmit} = useContext(AuthContext)

    const { values, errors, changeHandler, validateEmailHandler ,validatePasswordHandler , onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',
    }, 
    {
        [LoginFormErrors.Email]: '',
        [LoginFormErrors.Password]: ''
        },onLoginSubmit);


    return(
    <section className="login-section">
        <div className="container">
            <div className="container-wrapper">
               
                <div className="form-wrapper">
                    <div className="inner-wrapper">
                        <h3>Sign In</h3>
                        <Link to="/signup" className="signup-wrapper">Sign Up?</Link>
                    </div>
                    <Form method="POST" onSubmit={onSubmit}>
                        <Form.Group as={Row} 
                            className={`mb-3 ${errors[LoginFormErrors.EmailError] ? 'has-error' : ''}`}
                            controlId="formHorizontalEmail">
                    
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email"
                            name={LoginFormKeys.Email}
                            value={values[LoginFormKeys.Email]}
                            onChange={changeHandler} 
                            onBlur={validateEmailHandler} 
                            className={errors[LoginFormErrors.EmailError] ? 'is-invalid': '' }
                                />
                            {errors[LoginFormErrors.EmailError] && <div className="error-message">{errors[LoginFormErrors.EmailError]}</div>}
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} 
                            className={`mb-3 ${errors[LoginFormErrors.Password] ? 'has-error' : ''}`}
                            controlId="formHorizontalPassword">
                    
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password"
                                name={LoginFormKeys.Password}
                                value={values[LoginFormKeys.Password]} 
                                onChange={changeHandler} 
                                onBlur={validatePasswordHandler}
                                className={errors[LoginFormErrors.PasswordError] ? 'is-invalid' : "" }
                                 />
                            {errors[LoginFormErrors.PasswordError] && <div className="error-message">{errors[LoginFormErrors.PasswordError]}</div>}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 3 }}>
                            <Button type="submit">Sign in</Button>
                            </Col>
                        </Form.Group>

                        <div className="or-section">
                            <div className="border-line"></div>
                            <span className="or-text">or</span>
                            <div className="border-line"></div>
                        </div>
                        
                        <Form.Group as={Row} className="mb-3">
                            <Col sm={{ span: 10, offset: 0 }} className="text-center">
                                <Button variant="outline-primary" className="mr-2 mb-2 w-100">
                                    <SiGoogle style={{ marginRight: '22px' }} />Sign in with Google
                                </Button>

                                <Button variant="outline-primary" className="w-100">
                                    <FaFacebook style={{ marginRight: '16px' }} />Sign in with Facebook
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
        </div>   
    </section>    
    )
}

export default Login;




                