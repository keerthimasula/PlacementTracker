import React,{useState,useEffect} from 'react'
import { Navigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Indprofile = () => {
    const {id,sid}=  useParams()
   
    const [iprofile,setIprofile] = useState(null)
    const [puser,setPuser] = useState(null)
    
    const [x,setX] = useState([])
    

    useEffect(()=>{
                
        axios.get(`http://localhost:5000/indcompprofile/${id}`).then(
            res => setIprofile(res.data)
        )

        axios.get(`http://localhost:5000/getpresentuser`,{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(
            res => setPuser(res.data)
        )
        console.log(id)

        axios.get('http://localhost:5000/getregisteredcompanies',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => 
                setX(res.data.filter(profile => profile.compId === id && profile.studentId === sid )))

    },[])


  

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }

    const registerHandler = () =>{
        console.log(iprofile.compname,iprofile._id)
        axios.post("http://localhost:5000/registercomp",{compname:iprofile.compname,compId:iprofile._id,studentname:puser.fullname,studentId:puser._id,clgId:puser.collegeId,salary:iprofile.salary}).then(
            res=> alert(res.data)
        )
    }
    

 
    return (
        <div>
             <Header />
             { iprofile && <div>
            
            <div className="profile bg-light card " style={{"margin":"10px"}}>
                <center>
                        <img 
                            className="round-img"
                            src="https://assets-global.website-files.com/5d9bc5d562ffc22c37470958/5fce6ee18b204291c8598510_React%20Native%20Developer%20Hiring%20Guide.svg"
                            height="200" width="200"
                            alt="pix"
                        />
                </center>
                        <div className="profile_container" style={{"margin":"0 auto"}}>
                            <br/><h2 style={{"display":"inline"}}>Company: </h2><h2 style={{"display":"inline"}}><b style={{"color":"green"}}>{iprofile.compname}</b></h2><br/><br/>
                            <p><b>Company Mail: </b>{iprofile.email}</p>
                            <p><b>Company Description: </b>{iprofile.description}</p>
                            <p><b>Eligibility: </b>{iprofile.eligibility}</p>
                            <p><b>Salary: </b>{iprofile.salary}</p>
                            <p><b>Last Date for Registration: </b>{iprofile.lastdate}</p>
                            <p><b>Number of Rounds: </b>{iprofile.rounds}</p>

                            <center><br></br><br></br>{x.length<1 ? <div><h5 style={{color:"red"}}>Not yet Registered?</h5>&nbsp;&nbsp;<h5 className='btn btn-primary' onClick={registerHandler}>Register Now</h5></div>: <h5 style={{color:"green"}}>Registered Successfully</h5>}<br /><br /></center>
                        </div>
                
            </div>
            

</div>}
        </div>
    )
}

export default Indprofile
