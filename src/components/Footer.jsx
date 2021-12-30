import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

//a simple footer component that can be reused on all pages
const Footer = () => {

    return (
        <div >

            
            <br />
            <br />
            <br />
             <Navbar bg="light"  fixed= "bottom" className="footer" >
                 <Container className = "justify-content-center">
                    <Navbar.Brand>
                        Site by <a href="http://www.linkedin.com/in/salil-khanna" target="_blank" rel="noreferrer">Salil Khanna</a> with React JS
                     </Navbar.Brand>
                 </Container>
             </Navbar>
        </div>
    )
}

export default Footer
