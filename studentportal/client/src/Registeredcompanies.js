import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"

const Registeredcompanies = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
    const [tokenn,setTokenn] = useState(localStorage.getItem('token'))
    useEffect(()=>{
        axios.get('http://localhost:5000/getregisteredcompanies',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))

    },[search])
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    console.log(tokenn)



    const searchHandler = e =>{
        e.preventDefault();
        console.log(search);
        axios.get('http://localhost:5000/getcomp').then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))
    
    }
    
    
    return (
        <div>
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Companies Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Registered Companies Data <span style={{color:"blue"}}> 🤝 </span></h3>

                    <form className="d-flex" onSubmit={searchHandler} >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Enter to Search" aria-label="Search" />
                        <input className="btn btn-outline-success" type="submit" value="Search" />
                    </form>
                    
                </div>
            </nav>


                <div className="profiles ">
                <div className = "row" >
                    {data.length>=1 ? 
                    data.map(profile => 
                        <div className='col-md-4'>
                        <div className="profile bg-light card " style={{"margin":"10px","width": "25.5rem"}}>
                        <center>
                            <img 
                                className="round-img"
                                src="https://assets-global.website-files.com/5d9bc5d562ffc22c37470958/5fce6ee18b204291c8598510_React%20Native%20Developer%20Hiring%20Guide.svg"
                                height="200" width="300"
                                alt="user photo"
                            />
                            <div>
                                <h2 style={{"color":"green"}}>{profile.compname}</h2>
                                <h3>{profile.studentname}</h3>
                                <h5>{profile.clgId}</h5>
                                <h5>Number of rounds finished:{profile.writtentest ? (profile.technicalround ? (profile.hrround ? "3" : "2") : "1") : "0"}</h5>
                                <Link to={`/indregcompprofile/${profile._id}`} className="btn btn-primary">Update Rounds</Link><br /><br />
                            </div>

                            
                        </center>
                        </div>
                        </div>
                        )
                    : null}
                </div>
                </div>
                


            </section>


            { tokenn === "undefined" && <Navigate to="/login" />}

        </div>
    )
}

export default Registeredcompanies
