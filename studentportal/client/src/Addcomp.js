import React,{useState} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import Header from './Header'

const Addcomp = () => {
    const [data,seData] = useState({
        compname:"",
        eligibility:"",
        email:"",
        salary:"",
        lastdate:"",
        description:"",
        rounds:""
    })
    const [x,setX] = useState(0);
    const {compname,
    eligibility,
    email,
    salary,
    lastdate,
    description,rounds} = data

    const changeHandler = e =>{
        seData({...data,[e.target.name]:e.target.value})
    }
    


    const submitHandler = e =>{
        e.preventDefault(); 
        if(compname && eligibility && email && salary && lastdate && description && rounds){
            axios.post("http://localhost:5000/compregister",data).then(
                res => alert(res.data)
            )
        }
        
    }

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }

    return (
        <div>
            <Header />

            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"50px"}}>Register New Company</h1>
                <p className="lead"><b> Create Account for company</b></p>
                <form onSubmit={submitHandler}>
                    <input style={{width:"41%"}} type="text"             placeholder="Name*"            onChange={changeHandler} value={compname} name="compname" /><br /><br />
                    <input style={{width:"41%"}} type="email"            placeholder="Email Address*"   onChange={changeHandler} value={email} name="email" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="description"          onChange={changeHandler} value={description} name="description" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="eligibility"          onChange={changeHandler} value={eligibility} name="eligibility" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="salary"        onChange={changeHandler} value={salary} name="salary" /><br /><br />
                    <input style={{width:"41%"}} type="text"             placeholder="rounds*"            onChange={changeHandler} value={rounds} name="rounds" /><br /><br />
                    <input style={{width:"41%"}} type="text"         placeholder="lastdate*"         onChange={changeHandler} value={lastdate} name="lastdate" /><br /><br />
                    

                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
                
            </section><br /><br />

            {x===1 ? <Navigate to="/login" /> : null}
        </div>
    )
}

export default Addcomp
