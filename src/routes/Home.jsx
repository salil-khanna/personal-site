import React from 'react'
import nycProfilePic from '../img/nycProfilePic3.png'

//a home page route with a sandbox logo and a bunch of buttons to redirect to other pages
const Home = () => {

    return (

        <div>
            <div className="card container text-left">
                <div className="box-content">
                    <br/>

                    <div className="box-header">
                        <div className = "text-center">
                            <img
                                src={nycProfilePic}
                                
                                style = {{
                                    "height": "20rem",
                                    "width": "auto",
                                    "border-radius": "50%",
                                    // "box-shadow": 0 20px 30px 0 rgba(199, 179, 2, 0.15);

                                }}

                                alt="my-face"
                            />
                        </div>
                        <br/>
                        <h1>Hi, I'm Salil.</h1>
                        </div>
                    <div className="box-body">
                        <div className="box-body-content">
                            <h3>I am a software developer with a passion for learning and problem solving. I am currently a student at the University of Washington studying Computer Science and Economics. I am currently looking for a full-time position in the Seattle area.</h3>
                            <br />
                            <h3>I am currently working on a project called <a href="https://salad-spinner.netlify.app/" target="_blank" rel="noreferrer">Salad Spinner</a>, a game that I made in Unity. </h3>
                            <br />
                        </div>
                    </div>
                    <div className="box-footer">
                        <div className="box-footer-content">
                            <div className="float-none d-flex justify-content-center">
                                <a href="/documents/resume.pdf" target="_blank" rel="noreferrer"><button className="btn btn-primary mr-4">Resume</button></a>
                                <a href="/projects"><button className="btn btn-primary">Projects</button></a>
                                
                            </div>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>



        </div>
    )
}

export default Home
