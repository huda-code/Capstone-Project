import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
function Login() {

    
    return (
        <>
        <div className="container">
                <div>
                    <form>
                        <label htmlFor="email"><b>Email : </b></label><br />
                        <input type="email" name="email"   />
                        <label htmlFor="password"><b> Password : </b></label>
                        <input type="password" name="password" />
                        <input type="submit" value="Login" />
                    </form>
                </div>
                <p> Do not have an account ? <b> <Link to="/signup">Signup</Link></b></p>
            </div>
        </>
    )
}
export default Login;