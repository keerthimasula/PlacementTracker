import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'
const Login = () => {
    const [auth,setAuth] = useState(false)
    const [data,seData] = useState({
        email : '',
        password : '',
    })
    const {email,password} = data
    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
                                                            //    res => console.log(res.data)       to check before saving token in local storage
                                                            //2    res => localStorage.setItem('token',res.data.token)
        res => { if(res.data.length<=30){alert(res.data)}; localStorage.setItem('token',res.data.token);setAuth(true)}
        )
    }
                                                                                //2 if(localStorage.getItem('token')){
                                                                                //2     return <Redirect to='/dashboard' />
                                                                                //2 }

    if(auth){
        return <Navigate to='/dashboard' />
    }

    return (
        <div>
            
        <nav className="navbar bg-dark justify-content-left">
            
            <h1 id="header">
            <h1>Placement Portal Login</h1>
            </h1>

            {/* <div className="justify-content-left" >
                <h5 >
                    <Link to="/register" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                    <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                </h5>
            </div> */}
            
        </nav>
            <center>
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"100px"}} >Sign In</h1>
                <p className="lead"><b>Enter your details below to Sign In</b></p><br></br>
                <form onSubmit={submitHandler}>
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="email"    placeholder="Please enter your e-mail ID"    name="email" value={email}   onChange={changeHandler} /><br /><br />
                    <input className="form-control-lg m-1 border" style={{width:"40%"}} type="password" placeholder="Please enter your password" name="password" value={password} onChange={changeHandler} /><br /><br />
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
                
                <p><br></br>
                    Don't have an account? <Link to="/register">Sign Up</Link>
                </p>
            </section>
            </center>
        </div>
    )
}

export default Login
