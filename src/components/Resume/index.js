import React from 'react';
import resume from '../../assets/rwillfordResume.pdf'

function Resume() {
    return (
        <div>
            <section id="resume">
                <h2>Resume</h2>
                <embed 
                    src={resume}
                    width = "750px"
                    height = "1000px" 
                    type="application/pdf">
                </embed>
                <a href={resume}>Download My Resume</a>
            </section>
        </div>
    )
}

export default Resume;