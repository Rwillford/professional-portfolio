import React from "react";
import Project from '../Project';

function Portfolio() {
    const projects = [
        {
            title: 'Recipe Roulette',
            description: 'An App to randomly choose a food & drink recipe',
            image: 'RecipeRoulette.jpg',
            github: 'rehpotsirhc21/recipe-finder',
            deploy: 'https://rehpotsirhc21.github.io/recipe-finder/'
        },
        {
            title: 'LEGO Twitter',
            description: 'Social Media site for just LEGO!',
            image: 'legoTwitter.jpg',
            github: 'rehpotsirhc21/lego-twitter',
            deploy: 'https://intense-everglades-57738.herokuapp.com/'
        },
        {
            title: 'Low Tech Blog',
            description: 'An MVP level blog site',
            image: 'lowtechSS.jpg',
            github: 'Rwillford/low-tech-blog',
            deploy: 'https://fathomless-anchorage-72454.herokuapp.com/'
        },
        {
            title: 'Trip Weather Outlook',
            description: 'An App to get the weather forecast!',
            image: 'WeatherOutlook.jpg',
            github: 'Rwillford/Trip-Weather-Outlook',
            deploy: 'https://rwillford.github.io/Trip-Weather-Outlook/'
        },
    ];

    return (
        <div>
            <h3 className="title">Portfolio</h3>
            <section>
                
            </section>
        </div>
    )
}