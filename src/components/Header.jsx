import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav } from 'react-bootstrap'
import miniLogo from '../img/android-chrome-512x512.png'
import { FaYoutube, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';



//a simple header component that can be reused on all pages
//links to other pages are also provided through buttons
const Header = ({path}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 992px)` });
    const isHomePage = path === '/';
    
    return (
        <div>

            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/">
                    <img
                        src={miniLogo}
                        width="40"
                        height="40"
                        className="d-inline-block align-center"
                        alt="Logo"
                    />
                </Navbar.Brand>

                <Navbar.Brand href="/" className="font-weight-light display-1 align-center"> 
                    <h3> salilkhanna.com </h3> 
                </Navbar.Brand>

                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end" >
                <Nav className="me-auto ">
                    
                    {/* center a div */}
                    <div className="d-flex justify-content-center">
                    <Nav.Link href="/resume" target = "_blank" ><h4>Resume</h4></Nav.Link>
                    </div>

                    
                    <div className="d-flex justify-content-center">
                    
                    {isHomePage ? <Nav.Link href="/projects"><h4>Projects</h4></Nav.Link> 
                    : <Nav.Link href="/"><h4>Home</h4></Nav.Link>}
                    
                    </div>

                    <div className="d-flex justify-content-center">
                    <Nav.Link href="https://salad-spinner.netlify.app/" target="_blank"><h4>My Game!</h4></Nav.Link>
                    </div>


                    {isMobile ? 
                    
                    
                    
                    <Nav>
                    <div className="d-flex justify-content-center">
                    <Nav.Link href="https://www.github.com/salil-khanna/" target = "_blank" ><h4>Github: <FaGithub size={30} className = "mr-2" /></h4></Nav.Link>
                    </div>

                    <div className="d-flex justify-content-center">
                    <Nav.Link href="https://www.linkedin.com/in/salil-khanna/" target = "_blank" ><h4>LinkedIn: <FaLinkedin size={30} className = "mr-2" /></h4></Nav.Link>
                    </div>

                    <div className="d-flex justify-content-center">
                    <Nav.Link href="https://www.youtube.com/channel/UCrw0LE9SqBVY31v_jo0rIGg" target = "_blank" ><h4>Youtube: <FaYoutube size={30} className = "mr-2" /></h4></Nav.Link>
                    </div>

                    <div className="d-flex justify-content-center">
                    <Nav.Link href="mailto:salilkhannawork@gmail.com" target = "_blank" ><h4>Email: <FaEnvelope size={30} className = "mr-2" /></h4></Nav.Link>
                    </div>


                    </Nav>
                    
                    : 

                    <Nav>
                    
                    <Nav.Link href="https://www.github.com/salil-khanna/" target="_blank">         
                    <FaGithub size={30} />
                    </Nav.Link>

                    <Nav.Link href="https://www.linkedin.com/in/salil-khanna/" target="_blank">       
                    <FaLinkedin size={30} />
                    </Nav.Link>
                    
                    <Nav.Link href="https://www.youtube.com/channel/UCrw0LE9SqBVY31v_jo0rIGg" target="_blank">       
                    <FaYoutube size={30} />
                    </Nav.Link>

                    <Nav.Link href="mailto:salilkhannawork@gmail.com" target="_blank">       
                    <FaEnvelope size={30} />
                    </Nav.Link>

                    
                    </Nav>
                    }
                    
                    

                </Nav>
                </Navbar.Collapse>
                

            </Container>
            </Navbar>
        <br/>
        <br/>
        <br/>
        {!isMobile && <br /> }
        </div>
        
    )
}

export default Header


