import React,{useState,useEffect} from 'react'
import { Navigate,useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Indregcomp = () => {
    const {id}=  useParams()
   
    const [iprofile,setIprofile] = useState(null)
    const [puser,setPuser] = useState(null)
    

    useEffect(()=>{
                
        axios.get(`http://localhost:5000/indregcompprofile/${id}`).then(
            res => setIprofile(res.data)
        )

        

    },[])


  

    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }

   
    const wHandler = id =>{
        axios.put(`http://localhost:5000/updatewrittentest/${id}`).then(
            res => alert(res.data)
        )
    }

    const tHandler = id =>{
        axios.put(`http://localhost:5000/updatetechnicalround/${id}`).then(
            res => alert(res.data)
        )
    }

    const hHandler = id =>{
        axios.put(`http://localhost:5000/updatehrround/${id}`).then(
            res => alert(res.data)
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
                            height="250" width="450"
                            alt="pix"
                        />
                        <div>
                        <br/><h2 style={{"display":"inline"}}>Company: </h2><h2 style={{"display":"inline"}}><b style={{"color":"green"}}>{iprofile.compname}</b></h2><br/><br/>
                            <h4>{iprofile.studentname}</h4>
                            <h4>{iprofile.clgId}</h4><br /><br />

                            <h4 style={{color:"brown"}}><b>-:  Rounds Data :-</b></h4>
                            {iprofile.writtentest ? <h5>Written Test: Completed</h5> : <div><h5>Written Test : </h5><button className='btn btn-success' onClick={()=> wHandler(iprofile._id)}>Completed</button> </div>}
                            {iprofile.writtentest ? <div>{iprofile.technicalround ? <h5>Techinical Round: Completed</h5> : <div><h5>Technical round : </h5><button className='btn btn-success' onClick={()=> tHandler(iprofile._id)}>Completed</button> </div>}</div> : null}
                            {iprofile.technicalround ?<div>{iprofile.hrround ? <h5>HR Round: Completed</h5> : <div><h5>HR Round : </h5><button className='btn btn-success' onClick={()=> hHandler(iprofile._id)}>Completed</button> </div>}</div>:null}
                            <br /><br />
                            
                        </div>
                </center>
                
            </div>
            

</div>}
        </div>
    )
}

export default Indregcomp
