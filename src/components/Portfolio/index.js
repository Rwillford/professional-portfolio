import React from 'react';

function Portfolio(props) {
    const { title, description, image, github, deploy } = props;

    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <img 
                    src={require(`../../assets/images/${image}`)} 
                    style={{width: "400px"}}  
                    alt={`${title}`}
                    className="img-thumbnail mx-1"
                    
                    />
            </div>
                <p><a href={github}>GitHub Repository</a></p>
                <p><a href={deploy}>Deployed Site</a></p>
        </div>
    )
}

export default Portfolio;