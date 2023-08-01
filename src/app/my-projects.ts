import { INavAnchor } from "./nav-configs";
export interface IProjectInfo {
    imgPath: String;
    title: String;
    techList: string[];
    description: String;
    mainButton: INavAnchor;
    sideButton: INavAnchor;
}

export const ProjectInfos = [
    {
        imgPath: 'assets\\projects\\fallKing.png',
        title: 'Fall King',
        techList: ['Unity', 'C#'],
        description: "Fall King is a 2D vertical platformer built in Unity using C Sharp. Play as a knight and fall as far as you can while avoiding obstacles and enemies. Worked on creating game objects that interact with the game world and the player. Implemented the movement as well as the physics for the player to glide down and interact with the game world. Designed the AI system for two types of enemies that behave differently when the player is in range. Integrated Unity's new input system and separated the logic between hardware input, interactions, and actions.",
        mainButton: {
            logo: "link",
            text: "Live",
            link: "https://cyberexplosion.itch.io/fall-king"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/CyberExplosion/Fall-King"
        }
    },
    {
        imgPath: 'assets\\projects\\onlinestudy.png',
        title: 'Online Education Satisfaction Prediction',
        techList: ['Python', 'Jupyter', 'React', 'Bootstrap', 'TypeScript', 'Cloud Run' ,'Docker', 'Express'],
        description: "Researched students' online learning experience during COVID using different machine learning techniques such as linear regression, support vector machine, neural network, etc. Collaborated on Jupyter Notebook, and utilized Python ML libraries like NumPy, Pandas, and Tensorflow to build models and predict student satisfaction. Presented results and findings on a website built using React with Bootstrap to accelerate front-end development. Dockerized the back-end Node.js REST API built using TypeScript and Express. Deployed the API container to Google Cloud Run to take advantage of automatic scaling and serverless computing.",
        mainButton: {
            logo: "link",
            text: "Live",
            link: "https://website-ecs-177-online-studying.vercel.app/"
        },
        sideButton: {
            logo: "github",
            text: "Code",
            link: "https://github.com/ECS-171-Divorce-Team"
        }
    },
]