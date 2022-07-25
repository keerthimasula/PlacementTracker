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
                            Create a Student Profile and find your position in the Company.
                        </p>
                        
                        <Link to='/register' className="btn btn-primary">Sign Up</Link>&nbsp;&nbsp;&nbsp;
                        <Link to='/login' className="btn btn-success">Sign In</Link>
                    
                </section>
                
                
            </center>
        </div>
        
    )
}

export default Home


