import React from 'react';
import Project from './Project';

function Portfolio() {
    const projects = [
        {
            name: 'DailyCalm',
            description:
                'This app helps you search for ways to bring self care into your life. It provides daily suggestions that you can use. It also keeps score of what self care activities you have completed',
            image: '',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'Node.js',
                'GraphQL',
                'Heroku',
                'React.js',
                'MondoD',
                'JWT Authentication',
                'Bulma CSS',
                'React CSS',
                'MERN Stack',
            ],
            github: 'https://github.com/ckc2007/DailyCalm',
            deployed: 'https://daily-calm-2023-be74e09f75dd.herokuapp.com/',
        },
        {
            name: 'What The Hells For Dinner',
            description:
                'This is an app that helps you create meals using whatever you find in your kitchen. You choose your ingredients and then the app gives you possible recipes.' ,
            image: '',
            technologies: [
                'HTML/CSS',
                'JavaScript',
                'APIs',
                'Bulma',
                'Heroku',
            ],
            github: 'https://github.com/FiggersRM/WTHFD',
            deployed: 'https://figgersrm.github.io/WTHFD/',
        },
        {
            name: 'Timekeeper',
            description:
                'This is a timekeeping app that allows you to plan daily, weekly and monthly',
            image: '',
            technologies: ['HTML/CSS', 'JavaScript', 'Bulma', 'Sequelize/MySQL'],
            github: 'https://github.com/benbryant98/timekeeper',
            deployed: 'https://nameless-ravine-04537.herokuapp.com/',
        },
        
        {
            name: 'Weather Dashboard',
            description:
                'A weather dashboard that shows current weather and five-day weather forecast for any city.',
            image: '',
            technologies: ['HTML/CSS', 'JavaScript', 'Api'],
            github: 'https://github.com/blaxlrose/challenge-6-weather-dashboard',
            deployed: 'https://blaxlrose.github.io/challenge-6-weather-dashboard/',
        },
        {
            name: 'PWA Text Editor',
            description:
                'The application is a web text editor where the user can create notes or code snippets with or without an internet connection and where the user can reliably retrieve them for later use.',
            image: '',
            technologies: ['HTML/CSS', 'JavaScript'],
            Github: 'https://github.com/blaxlrose/challenge-19-PWA-Text-Editor',
            deployed: 'https://sleepy-retreat-08707-7164d0d1ae9b.herokuapp.com',
        },
        {
            name: 'ReadMe Generator',
            description:
                'This is a simple app using node.js to create a README file for your repository.',
            image: '',
            technologies: ['JavaScript', 'Node.js'],
            github: 'https://github.com/blaxlrose/Challenge-9-Professional-README-Generator',
        },
    ];

    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Portfolio</h1>
            </div>
            <div>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[0]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[1]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[2]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[3]}></Project>
                    </li>
                </ul>
                <ul className="flex-row mobile-row">
                    <li className="padding">
                        <Project projects={projects[4]}></Project>
                    </li>
                    <li className="padding">
                        <Project projects={projects[5]}></Project>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
