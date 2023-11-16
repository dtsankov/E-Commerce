//React imports
import { useState } from "react";
import {Link} from "react-router-dom";

//Internal imports (services,assets,custom hoooks,etc..)
import * as authService from "../../services/authService";
import loginImage from '../../resources/images/login.jpg';


//Bootstrap imports
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate  } from "react-router-dom";



 const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate()


    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
          setEmailError('Invalid email address');
          return false;
        }
        setEmailError('');
        return true;
      };
    
      const validatePassword = () => {
        if (password.length < 6) {
          setPasswordError('Password must be at least 6 characters');
          return false;
        }
        setPasswordError('');
        return true;
      };

    const onSubmit = async (e) => {
        e.preventDefault();

        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (isEmailValid && isPasswordValid){
        try {
           
            const result = await authService.register(email, password)

            if (result && result._id) {
                navigate('/profile');
                }
        } catch (error) {
            console.log(error);
        }
    }

    }

    const onChangeEmailHandler = (e)=>{
        setEmail(e.target.value);
    }

    
    const onChangePasswordHandler = (e) =>{
        setPassword(e.target.value);
}

    
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
                                    className={`mb-3 ${emailError ? 'has-error' : ''}`}
                                    controlId="formHorizontalEmail">
                            
                                    <Col sm={10}>
                                    <Form.Control type="email" placeholder="Email"
                                        value={email}
                                        onChange={onChangeEmailHandler} 
                                        onBlur={validateEmail} 
                                        className={emailError ? 'is-invalid' : ''}
                                        />
                                    {emailError && <div className="error-message">{emailError}</div>}
                                    </Col>
                                </Form.Group>
        
                                <Form.Group as={Row} 
                                    className={`mb-3 ${passwordError ? 'has-error' : ''}`}
                                    controlId="formHorizontalPassword">
                            
                                    <Col sm={10}>
                                    <Form.Control type="password" placeholder="Password"
                                         value={password} 
                                         onChange={onChangePasswordHandler} 
                                         onBlur={validatePassword}
                                         className={passwordError ? 'is-invalid' : ''}
                                         />
                                    {passwordError && <div className="error-message">{passwordError}</div>}
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