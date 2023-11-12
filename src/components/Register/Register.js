import { useState } from "react";
import * as authService from "../../services/authService";

export const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const result = await authService.register(email, password)

             console.log(result)

            
        } catch (error) {
            console.log(error);
        }

    }

    const onChangeUsernameHandler = (e)=>{
        setEmail(e.target.value);
    }

    
    const onChangePasswordHandler = (e) =>{
        setPassword(e.target.value);
}

    return(
        <div>
            <h1>Register</h1>
            <form action="POST" onSubmit={(e)=> onSubmit(e)}>
                <input type="text" placeholder="Email" onChange={(e)=>onChangeUsernameHandler(e)} value = {email}/>
                <input type="password" placeholder="Password" onChange={(e)=>onChangePasswordHandler(e)} value={password}/>
                <button type="submit" >Register</button>
            </form>
        </div>
    )
}