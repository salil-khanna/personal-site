import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import Projects from './routes/Projects'
import Footer from './components/Footer'

//the main gateway to the site, with different routes to facilitate navigation and the different pages
const App = () => {

    
    return (
        <div>
            

            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<Navigate to ="/" />}/>
                </Routes>
                
            </Router>

            <Footer />
        </div>
    )
}

export default App

