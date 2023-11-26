import React from "react";
const Login = (props) =>{
    // console.log(props);
    return (
        <form action="">
            <input type="text"  placeholder="Username"/>
            <input type="password"  placeholder="Password"/>
           {props.isRegistered === false &&  <input type="password"  placeholder="confirm Password"/>}
            <button type="submit">
            {props.isRegistered? ('please login'): ('Hello') }
            </button>
        </form>
    )
}
export default Login;