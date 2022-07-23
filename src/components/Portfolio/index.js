import React from 'react';
import recipe from "../../assets/images/RecipeRoulette.jpg"

function Portfolio() {
    const currentProject = {
        title: 'Recipe Roulette',
        description: 'An App to randomly choose a food & drink recipe',
        github: 'https://github.com/rehpotsirhc21/recipe-finder',
        deploy: 'https://rehpotsirhc21.github.io/recipe-finder/'
    }
    return (
        <section>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.description}</p>
            <div>
                <img 
                    src={recipe} 
                    style={{width: "400px"}}  
                    alt="test pic"
                    className="img-thumbnail mx-1"
                    />
            </div>
                <p><a href={currentProject.github}>GitHub Repository</a></p>
                <p><a href={currentProject.deploy}>Deployed Site</a></p>
        </section>
    )
}

export default Portfolio;