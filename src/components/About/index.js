import React from 'react';
import profilePic from "../../assets/images/BobFacePic.jpg";


function About() {
    return (
        <section className="my-5">
            <h1 className="section-title" id="about">What About Bob!</h1>
            <img src={profilePic} className="my-2 rounded mx-auto d-block" style={{ width: "5%" }} alt="cover"/>
            <p className="fs-4 text-center">Hello, my name is Robert Willford but you can just call me Bob. I'm the son of an IT technician.<br></br>
               I have been working with computers for so long that I remember having to use command lines to run everything.<br></br>
               I grew up in South Minneapolis in the Longfellow neighborhood and graduated from Roosevelt in 2003.<br></br> 
               I served 4 years in the United States Marine Corps., which I got to live in Japan for 2 years then North Carolina for 2 years before I came back Minnesota.<br></br>
               I have been happily married to an awesome wife Jamie now for 9 years! We have three amazing children, ages 16, 7 and 6.<br></br>
               As for work, I have over 12 years of experience being a Painter. Right now, I am a Lead Painter for Brush Master's.<br></br>
               I'm currently enrolled at the University of Minnesota Coding Bootcamp in becoming a full stack developer.<br></br>
            </p>
        </section>
    )
}

export default About;