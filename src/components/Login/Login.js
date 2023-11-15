//React imports
import { useState } from "react";

//Internal imports (services,assets,custom hoooks,etc..)
import * as authService from "../../services/authService";
import loginImage from '../../resources/images/login.jpg';
import { FaGoogle, FaFacebook } from 'react-icons/fa'

//Bootstrap imports
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate  } from "react-router-dom";




 const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
           
        const result = await authService.login(email, password)
        console.log(result)

            if(result && result._id){
                navigate('/profile')
            }
        } catch (error) {
            console.log(error);
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
                        <img src={loginImage}  alt="login-image" />
                </div>

                <div className="form-wrapper">
                    <h3>Sign In</h3>
                    <Form onSubmit={onSubmit}>
                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    
                            <Col sm={10}>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={onChangeEmailHandler} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    
                            <Col sm={10}>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePasswordHandler} />
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
                                    <FaGoogle />Sign in with Google
                                </Button>

                                <Button variant="outline-primary" className="w-100">
                                    <FaFacebook />Sign in with Facebook
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