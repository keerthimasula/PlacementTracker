import React,{useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"

const Dashboard = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
    const [tokenn,setTokenn] = useState(localStorage.getItem('token'))
    // useEffect(()=>{
    //     axios.get('http://localhost:5000/allprofiles',{
    //             headers : {
    //                 'x-token' : localStorage.getItem('token')
    //             }
    //         }).then(res => 
    //             !search ? setData(res.data) : setData(res.data.filter(profile => profile.collegeId.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.skill.toLowerCase().includes(search.toLowerCase()) | profile.branch.includes(search.toUpperCase()))))

        
    // },[search])
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    console.log(tokenn)



   
    
    
    return (
        <div>
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"orange","marginTop":"20px"}}>Companys Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Browse and Analyse Companies <span style={{color:"blue"}}> 🤝 </span></h3>

                    {/* <form className="d-flex" onSubmit={searchHandler} >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="clgId /email /skill /branch" aria-label="Search" />
                        <input className="btn btn-outline-success" type="submit" value="search" />
                    </form> */}
                    
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
                                <h2 style={{"color":"green"}}>{profile.fullname}</h2>
                                <h3>{profile.collegeId}</h3>
                                <h4>{profile.branch}</h4>
                                <p>{profile.email}</p>
                                {/* <p>{profile.mobile}</p>*/}
                                <Link to={`/indprofile/${profile._id}`} className="btn btn-primary">View Profile</Link>
                            </div>

                            <ul>
                                {profile.skill.split(",").map(skill => <li className="text-primary" style={{listStyleType:"none",marginLeft:"-30px"}}>{skill}</li>
                                    )}
                                
                            </ul>
                        </center>
                        </div>
                        </div>
                        )
                    : null}
                </div>
                </div>
                


            </section>

            

        </div>
    )
}

export default Dashboard
