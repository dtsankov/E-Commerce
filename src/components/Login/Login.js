import { useState } from "react";
import * as authService from "../../services/authService";

export const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
           
            const result = await authService.login(username, password)


            
        } catch (error) {
            console.log(error);
        }

    }

    const onChangeUsernameHandler = (e)=>{
        setUsername(e.target.value);
    }

    
    const onChangePasswordHandler = (e) =>{
        setPassword(e.target.value);
}

    return(
        <div>
            <h1>Login</h1>
            <form action="POST" onSubmit={(e)=> onSubmit(e)}>
                <input type="text" placeholder="Username" onChange={(e)=>onChangeUsernameHandler(e)} value = {username}/>
                <input type="password" placeholder="Password" onChange={(e)=>onChangePasswordHandler(e)} value={password}/>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}