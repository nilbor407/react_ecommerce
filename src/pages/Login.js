import { useState } from "react";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login()
{
    const [user_mobile,setUserMobile] = useState("");
    const [user_password,setUserPassword] = useState("");
    const navigate = useNavigate();
    function loginProcess(event)
    {
        event.preventDefault();
        console.log("Welcome To Login");
        console.log(user_mobile);
        console.log(user_password);
        var obj = {"user_mobile":user_mobile,"user_password":user_password};
        axios.post("https://a2zithub.org/dairy/abi/user_login",obj).then((res)=>{
            if(res.data.status == 'success')
            {
                // alert("Login Success");
                console.log(res.data);
                localStorage.setItem("user_token",res.data.token);
                navigate("/products");
            }
            else 
            {
                alert("Invalid Username Password");
            }
        });

    }

    return (<>
        <Navbar />
        <br/><br/>
        
        <br/>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5 border p-3">
                    <h1>Login Account</h1>
                    <form action="" method="" onSubmit={loginProcess}>
                        Enter Mobile 
                        <input type="number" className="form-control" onChange={(e)=>{ setUserMobile(e.target.value) }} /><br/>
                        Enter Password
                        <input type="password" className="form-control" onChange={(e)=>{ setUserPassword(e.target.value) }}/><br/>
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <Footer />
    </>)
}


export default Login;