import React from 'react'
import nycProfilePic from '../img/nycProfilePic3.png'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import microsoft from '../img/microsoft.png'
import datadog from '../img/datadog.png'
import fidelity from '../img/fidelity.png'
import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

//a home page route with a sandbox logo and a bunch of buttons to redirect to other pages
const Home = () => {
    const {pathname} = useLocation();

    return (
        
        <div>
            <Header path = {pathname}/>
            <div className="card container text-left">
                <div className="box-content">
                    <br/>

                    <div className="box-header">
                        <div className = "text-center">
                            <img
                                src={nycProfilePic}
                                
                                style = {{
                                    "height": "18rem",
                                    "width": "auto",
                                    "border-radius": "50%",
                                    // "box-shadow": 0 20px 30px 0 rgba(199, 179, 2, 0.15);

                                }}

                                alt="my-face"
                            />
                        </div>
                        <br/>
                        
                        <div >
                            <h1 > Hi, I'm Salil. </h1> 
                            <h3 > Software Engineer && Professional Procrastinator</h3>
                        </div>
                    
                    </div>
                    <br/>
                    <div className="box-body">
                        <div className="box-body-content">
                            <h3>About Me: </h3>
                                <h4>
                                    <ul>
                                        <li>
                                        Graduating in 2023 from <a href="https://www.northeastern.edu" target="_blank" rel="noreferrer">Northeastern University</a>
                                        </li>
                                        <li>
                                        Based in <a href="https://www.nyc.gov" target="_blank" rel="noreferrer"> New York City</a>
                                        </li>
                                        <li>
                                        Lover of <a href= "https://www.youtube.com/watch?v=jksPhQhJRoc" target="_blank" rel="noreferrer">learning</a>
                                        </li>
                                    </ul>

                                </h4>
                            <br />

                            <h3>Job History: </h3>
                            <h4>
                                 
                                Software Engineer Intern @ <a href= "https://www.datadoghq.com" target="_blank" rel="noreferrer"><img
                                    src={datadog}
                                    width="34"
                                    height="34"
                                    className="d-inline-block align-center"
                                    alt="datadog"
                                    
                                /></a>
                                

                                <br/>
                                Software Engineer Intern @ <a href= "https://www.microsoft.com" target="_blank" rel="noreferrer"><img
                                    src={microsoft}
                                    width="28"
                                    height="28"
                                    className="d-inline-block align-center"
                                    alt="datadog"
                                /></a>
                                
                                <br/>  
                                Tech Analyst Co-op @ <a href= "https://www.fidelity.com" target="_blank" rel="noreferrer"> <img
                                    src={fidelity}
                                    width="32"
                                    height="40"
                                    className="d-inline-block align-center"
                                    alt="datadog"
                                />
                                </a>
                                <br/>
                                <a href="/resume" target="_blank"> View full resume here </a>
                            </h4>
                            <br/>
                            
                            <h3>Contact Info: </h3>
                            <h4>
                                

                                <a href="https://www.github.com/salil-khanna/" target="_blank" rel="noreferrer" style = {{
                                    "color": "black",
                                    "text-decoration": "none",
                                
                                }}><FaGithub size= {50}/> </a>

                                <a href="https://www.linkedin.com/in/salil-khanna" target="_blank" rel="noreferrer" style = {{
                                    "color": "",
                                    "text-decoration": "none",
                                
                                }}><FaLinkedin size= {50}/> </a>

                                <a href="https://www.youtube.com/channel/UCrw0LE9SqBVY31v_jo0rIGg"  target="_blank" rel="noreferrer" style = {{
                                    "color": "red",
                                    "text-decoration": "none",
                                
                                }}><FaYoutube size= {50}/> </a>
                                
                                

                                <a href="emailto:salilkhannawork@gmail.com" target="_blank" rel="noreferrer" style = {{
                                    "color": "orange",
                                    "text-decoration": "none",
                                
                                }} ><FaEnvelope size= {50}/>   </a>


                            </h4>
                            <br />

                        </div>
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Home
