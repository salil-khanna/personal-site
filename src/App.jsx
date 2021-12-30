import React from 'react'
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Projects from './routes/Projects'


//the main gateway to the site, with different routes to facilitate navigation and the different pages
const App = () => {

    
    return (
        <div>
            <Header />

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

