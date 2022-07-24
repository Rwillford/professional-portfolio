import React from 'react';

function Project() {
    
    const projects = [
        {
            title: 'Recipe Roulette',
            description: 'An App to randomly choose a food & drink recipe',
            image: 'RecipeRoulette.jpg',
            github: 'https://github.com/rehpotsirhc21/recipe-finder',
            deploy: 'https://rehpotsirhc21.github.io/recipe-finder/'
        },
        {
            title: 'LEGO Twitter',
            description: 'Social Media site for just LEGO!',
            image: 'legoTwitter.jpg',
            github: 'https://github.com/rehpotsirhc21/lego-twitter',
            deploy: 'https://intense-everglades-57738.herokuapp.com/'
        },
        {
            title: 'Low Tech Blog',
            description: 'An MVP level blog site',
            image: 'lowtechSS.jpg',
            github: 'https://github.com/Rwillford/low-tech-blog',
            deploy: 'https://fathomless-anchorage-72454.herokuapp.com/'
        },
        {
            title: 'Trip Weather Outlook',
            description: 'An App to get the weather forecast!',
            image: 'WeatherOutlook.jpg',
            github: 'https://github.com/Rwillford/Trip-Weather-Outlook',
            deploy: 'https://rwillford.github.io/Trip-Weather-Outlook/'
        },
        {
            title: 'Work Day Planner',
            description: 'An App to Plan your Day!',
            image: 'WorkDayPlanner.jpg',
            github: 'https://github.com/Rwillford/work-day-planner',
            deploy: 'https://rwillford.github.io/work-day-planner/'
        },
        {
            title: 'Run Buddy',
            description: 'First App made in Bootcamp!',
            image: 'RunBuddy.jpg',
            github: 'https://github.com/Rwillford/run-buddy',
            deploy: 'https://rwillford.github.io/run-buddy/'
        },
    ];

    return (
        <div>
            <h2 id="projects">Projects</h2>
        <section className="flex-row">
            {projects.map(project =>{
                return (
                    <div className="card mb-3">
                        <div className="card-body p-4">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                        </div>
                        <img 
                            src={require(`../../assets/images/${project.image}`)} 
                            style={{width: "400px", height: "300px"}}  
                            alt={`${project.title}`}
                            className="img-thumbnail mx-1"
                            key={project.title}
                        />
                        <div>
                            <a href={project.github}>GitHub</a>
                            <a href={project.deploy}>Deployed Site</a>
                        </div>
                    </div>
                )
            })}
        </section>
        </div>
    )
};

export default Project;