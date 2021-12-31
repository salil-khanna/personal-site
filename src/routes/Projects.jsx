import React from 'react'
import Header from '../components/Header'
import { useLocation } from 'react-router-dom'

const Projects = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <Header path = {pathname}/>
            Hello Projects
        </div>
    )
}

export default Projects
