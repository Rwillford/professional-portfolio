import React from 'react';
import resume from '../../assets/rwillfordResume.pdf'

function Resume() {
    return (
        <section id="resume">
            
            <h2 className="section-title">Resume</h2>
                <a href={resume} className="d-flex justify-content-center mb-5">Download Bob's Resume</a>
            <div className="d-flex justify-content-center">
                    {/* <h4>Bob's Proficiencies:</h4> */}
                <div className='list-group'>
                    <ul className="list-group">
                        <li className="list-group-item active">Bob's Proficiencies:</li>
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">HTML</li>
                        <li className="list-group-item">CSS</li>
                        <li className="list-group-item">Javascript</li>
                        <li className="list-group-item">Bootstrap</li>
                        <li className="list-group-item">JQuery</li>
                        <li className="list-group-item">Node.js</li>
                        <li className="list-group-item">Express.js</li>
                        <li className="list-group-item">MySQL</li>
                        <li className="list-group-item">MongoDB</li>
                    </ul>
                </div>
            </div>
            {/* <div className="d-flex justify-content-center">
                <embed 
                    src={resume}
                    width = "750px"
                    height = "1000px" 
                    type="application/pdf">
                </embed>
            </div> */}
        </section>
    )
}

export default Resume;