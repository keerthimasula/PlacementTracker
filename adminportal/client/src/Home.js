import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <center>

                {/* <Logo /> */}
                
               
                <section  style={{"marginTop":"170px"}}>
                    
                        <h1 >VJIT Placement Portal</h1>
                        <p >
                            Create a student profile and find your position in companies!
                        </p>
                        
                        
                        <Link to='/login' className="btn btn-success">Admin Login</Link>
                    
                </section>
                
                
            </center>
        </div>
        
    )
}

export default Home


