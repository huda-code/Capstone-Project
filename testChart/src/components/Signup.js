import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"
import "./Home.css"
 

// import NavBar from "./Navbar";



function Signup(){


    
    return(
        <>
        
        <div className="container">
                 <div>
                     <h1></h1>
                     <center>
                         {/* <Link to="/"> <img src="https:pngimg.com/uploads/book/book_PNG51090.png" alt="Login" style={{ width: '30%' }} /></Link> */}
                     </center>
                 </div>
                 {alert !== null && <h3 className={`alert-${alert.type}`}>{alert.msg}</h3>}
                 <div className="signform">
                     <form >
                         <label htmlFor="firstname"><b>First Name :</b></label>
                         <input type="text" name="firstname" autoComplete="off"   />
                         <label htmlFor="lastname"><b>Last Name :</b></label>
                         <input type="text" name="lastname" autoComplete="off"   />
                         <label htmlFor="email"><b>Email : </b></label><br />
                         <input type="email" name="email" autoComplete="off"   />
                         <label htmlFor="password"><b> Password : </b></label>
                         <input type="password" name="password" autoComplete="off"   />
                         <label htmlFor="password"><b> Confirm Password : </b></label>
                         <input type="password" name="password2" autoComplete="off"  /><br />
                         <input type="submit" value="Register" />
                     </form>
                 </div>
                 <div className="Already">
                 <p> Already have an account ? <b> <Link to="/">Login</Link></b></p>
             </div>
        </div>
        
        
        </>

    )
}
export default Signup;