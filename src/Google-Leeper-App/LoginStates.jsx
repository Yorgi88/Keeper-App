import { useState } from "react";

import Login from "./login";
// eslint-disable-next-line react-hooks/rules-of-hooks

var isLoggedIn = true;

const CheckLogin = () => {
    // const [show, setShow] = useState(false);
    // const Alert = () => {
    //     return (
    //         <h1>Hello bitch</h1>
    //     )
    // }
    // const DecideAlert = () => {
    //     if (show) {
    //         setShow(false)
    //     }else{
    //         setShow(true)
    //     }
    // }




    return (
        // <div>
        //     {isLoggedIn?('Hello') : (<Login/>)}
        // </div>

        <div className="container">
            <Login
                isRegistered={isLoggedIn}
                job='developer'
            
            />
            {/* here we paas some props in the form */}
        </div>

    



        // <div>
        //     {/* <button type="button" onClick={DecideAlert}>click it</button> */}
        //     {/* {show && <Alert/>} */}
        // </div>
    )
}
// this is about conditional rendering
export default CheckLogin
